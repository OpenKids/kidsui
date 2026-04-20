import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  define: {
    "process.env.NODE_ENV": '"production"',
    "process.env": "{}",
  },
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
  esbuild: {
    define: {
      "process.env.NODE_ENV": '"production"',
    },
  },
});
