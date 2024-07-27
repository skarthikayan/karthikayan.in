import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/karthikayan.in",
  plugins: [
    react(),
    svgr({
      svgrOptions: {},
      esbuildOptions: {},
      include: "**/*.svg?react",
      exclude: "",
    }),
  ],
});
