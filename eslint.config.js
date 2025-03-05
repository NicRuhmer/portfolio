import pluginJs from "@eslint/js";
import tailwind from "eslint-plugin-tailwindcss";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,vue}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    files: ["**/*.vue"],
    rules: {
      "tailwindcss/no-custom-classname": "off", // Désactive l'avertissement pour les classes personnalisées
    },
    languageOptions: {
      parserOptions: { parser: tseslint.parser },
    },
  },
  {
    ...tailwind.configs["flat/recommended"],
    rules: {
      "tailwindcss/no-custom-classname": "off", // Désactive l'avertissement globalement
    },
  },
];
