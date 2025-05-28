import js from "@eslint/js"; //检验 js 规范
import globals from "globals";
import tseslint from "typescript-eslint"; //推荐 ts 规范
import pluginVue from "eslint-plugin-vue"; //推荐 vue 规范
import { defineConfig } from "eslint/config";
import prettierRecommended from "eslint-plugin-prettier/recommended";

export default defineConfig([
  js.configs.recommended,
  tseslint.configs.recommended,
  pluginVue.configs["flat/essential"],
  prettierRecommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parserOptions: {
        parser: tseslint.parser
      }
    },
    rules: {
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
          trailingComma: "none"
        }
      ]
    }
  },
  {
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser
      }
    }
  },
  {
    ignores: ["*.d.ts", "node_modules", "dist/", "build/"]
  }
]);
