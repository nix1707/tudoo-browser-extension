import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { crx } from "@crxjs/vite-plugin";
import zip from "vite-plugin-zip-pack";
import manifest from "./manifest.json";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    crx({ manifest }),
    zip({ outDir: "release", outFileName: "release.zip" }),
    svelte(),
  ],
  server: {
    cors: {
      origin: [/chrome-extension:\/\//],
    },
  },
});
