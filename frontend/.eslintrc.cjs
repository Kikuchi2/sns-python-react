// .eslintrc.cjs
module.exports = {
  root: true,
  env: { browser: true, es2022: true, node: true },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  settings: {
    react: { version: "detect" },
    "import/resolver": { typescript: { project: "./tsconfig.json" } },
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "import/prefer-default-export": "off",
    "react/jsx-props-no-spreading": "off",
    "@typescript-eslint/consistent-type-imports": ["warn", { prefer: "type-imports" }],
  },
  ignorePatterns: ["dist", "dist-ssr", "node_modules"],
};
