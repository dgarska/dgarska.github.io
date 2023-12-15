// vite.config.js or vite.config.ts
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: "/dgarska.github.io",
  plugins: [Vue()],
  build: {
    outDir: "docs",
  },
});
