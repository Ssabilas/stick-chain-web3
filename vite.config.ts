import { defineConfig } from "vite";
import bundleSize from "vite-plugin-bundlesize";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    bundleSize({
      limits: [
        { name: "assets/index-*.js", limit: "300kb" },
        { name: "**/*", limit: "150 kB" },
      ],
    }),
  ],
  build: {
    sourcemap: "hidden",
  },
});
