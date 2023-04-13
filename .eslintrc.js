module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    commonjs: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "eslint-config-prettier",
    "react-app",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/recommended",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    "react",
    "import",
    "react-hooks",
    "testing-library",
    "jest-dom",
    "prettier",
    "jsx-a11y",
  ],
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "import/no-unresolved": [2, { commonjs: true, amd: true }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/named": 2,
    "import/namespace": 2,
    "import/default": 2,
    "import/export": 2,
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: ["build", "dist", "public"],
};
