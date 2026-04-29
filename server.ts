// Tiny Bun static server for the built Vite app.
// Run after `bun run build` produces ./dist.

import { serve, file } from "bun";
import { existsSync, statSync } from "node:fs";
import { join, normalize } from "node:path";

const DIST = new URL("./dist", import.meta.url).pathname;
const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || "0.0.0.0";

if (!existsSync(DIST)) {
  console.error(`✗ ./dist not found — run \`bun run build\` first.`);
  process.exit(1);
}

const INDEX = join(DIST, "index.html");

function cacheHeaders(path: string): Record<string, string> {
  if (path.startsWith("/assets/")) {
    return { "Cache-Control": "public, max-age=31536000, immutable" };
  }
  if (/\.(?:woff2?|svg|webp|png|jpg|jpeg|gif|ico)$/.test(path)) {
    return { "Cache-Control": "public, max-age=86400" };
  }
  return { "Cache-Control": "public, max-age=300, must-revalidate" };
}

serve({
  port: PORT,
  hostname: HOST,
  fetch(req) {
    const url = new URL(req.url);
    const safe = normalize(url.pathname).replace(/^(\.\.[/\\])+/, "");
    const target = safe === "/" ? "/index.html" : safe;
    const candidate = join(DIST, target);

    if (existsSync(candidate) && statSync(candidate).isFile()) {
      return new Response(file(candidate), { headers: cacheHeaders(target) });
    }

    // SPA fallback: any unknown path serves the app shell.
    return new Response(file(INDEX), {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=60, must-revalidate",
      },
    });
  },
  error(err) {
    console.error("server error:", err);
    return new Response("Internal Server Error", { status: 500 });
  },
});

console.log(`pythinker-home → http://${HOST}:${PORT}  (serving ${DIST})`);
