import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import svgLoader from "vite-svg-loader";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import compression from "vite-plugin-compression";
import prettierDts from "vite-plugin-prettier-dts";

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
            algorithm: "gzip",
            threshold: 10240 // 仅压缩 >10KB 的文件
        }),
        prettierDts()
    ],
    server: {
        host: "0.0.0.0",
        port: 3031
    },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url))
        }
    },
    build: {
        target: "es2022",
        cssCodeSplit: true,
        rollupOptions: {
            output: {
                manualChunks: {
                    "vue-vendor": ["vue", "vue-router"]
                }
            }
        },
        minify: "esbuild"
    }
});
