import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
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
