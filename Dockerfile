# Multi-stage Bun image. Use this as the Dokploy "Build Type: Dockerfile"
# alternative if your Nixpacks version is too old to install Bun.
#
#   docker build -t pythinker-home .
#   docker run --rm -p 3000:3000 pythinker-home

# ---- build stage ---------------------------------------------------------
FROM oven/bun:1.1.34 AS build
WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build

# ---- runtime stage -------------------------------------------------------
FROM oven/bun:1.1.34-slim AS runtime
WORKDIR /app

ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=3000

COPY --from=build /app/dist ./dist
COPY --from=build /app/server.ts ./server.ts
COPY --from=build /app/package.json ./package.json

EXPOSE 3000

# Healthcheck — server fails fast if dist/ is missing (see server.ts).
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD bun -e "fetch('http://127.0.0.1:'+(process.env.PORT||3000)+'/').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

CMD ["bun", "run", "server.ts"]
