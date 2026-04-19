import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "KidsUI",
      fileName: "kidsui",
      formats: ["es", "umd"],
    },
    rollupOptions: {
      // Motion is bundled in — no external deps for easy consumption
    },
    target: "es2021",
    minify: "oxc",
  },
});
