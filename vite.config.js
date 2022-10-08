import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    assetsDir: resolve(__dirname, "src/assets"),
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "app-my-library",
      fileName: (format) => `app-my-library.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
    },
    output: {
      globals: {
        vue: "Vue",
      },
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
