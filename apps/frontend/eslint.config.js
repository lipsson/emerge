import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react"; // 1. Dodano import

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended, // Rozpakowujemy tablicę konfiguracji TS
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    // 2. Rejestracja pluginów
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      react: reactPlugin, // To naprawia błąd "Definition for rule... not found"
    },
    // 3. Ustawienia dla pluginu React (wymagane)
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules, // Dodanie domyślnych reguł Reacta

      "react-refresh/only-export-components": [
        "off",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-explicit-any": "off",
      /*'@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],*/
      "@typescript-eslint/no-unused-vars": ["off", { argsIgnorePattern: "^_" }],
      // W Vite (React 17+) nie musimy importować Reacta w każdym pliku
      "react/react-in-jsx-scope": "off",
    },
  },
);
