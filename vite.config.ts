import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import svgLoader from "vite-svg-loader";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  server: {
    host: "0.0.0.0",
    port: 3031
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }
});
