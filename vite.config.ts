import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import svgLoader from "vite-svg-loader";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import compression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        svgLoader(),
        AutoImport({
            imports: ["vue", "vue-router"],
            dts: "src/auto-imports.d.ts"
        }),
        Components({
            dts: "src/components.d.ts"
        }),
        compression({
            algorithm: "gzip"
        })
    ],
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
