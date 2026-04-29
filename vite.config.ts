import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// `BASE_PATH` is set by the GitHub Pages workflow to "/pythinker-home/"
// so absolute asset URLs resolve under the project subpath. Locally
// (Nixpacks runtime, custom domain at root) it defaults to "/".
const base = process.env.BASE_PATH || "/";

export default defineConfig({
  base,
  plugins: [vue()],
  build: {
    target: "es2022",
    sourcemap: false,
    cssMinify: true,
    reportCompressedSize: false,
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: false,
  },
  preview: {
    host: "0.0.0.0",
    port: 4173,
  },
});
