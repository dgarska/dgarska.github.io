// vite.config.js or vite.config.ts
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: "https://dgarska.github.io/",
  plugins: [Vue()],
});
