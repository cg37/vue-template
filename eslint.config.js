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
          trailingComma: "none",
          bracketSpacing: true, // 不在括号内加空格
          arrayBracketNewlines: true, // 禁止数组括号换行
          objectCurlyNewlines: "never" // 强制对象括号不换行
        }
      ],
      "vue/html-self-closing": [
        "error",
        {
          html: {
            void: "always", // 强制 void 元素（如 <img>, <input>）自闭合
            normal: "never", // 强制非 void 元素（如 <div>, <span>）不自闭合
            component: "always" // 强制 Vue 组件自闭合（如 <MyComponent />）
          },
          svg: "always", // 强制 SVG 标签自闭合
          math: "always" // 强制 MathML 标签自闭合
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
