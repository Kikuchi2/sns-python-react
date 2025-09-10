// .eslintrc.cjs
module.exports = {
  root: true,
  env: { browser: true, es2022: true, node: true },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
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
    "import/no-extraneous-dependencies": ["error", {
      devDependencies: ["vite.config.*", "**/*.config.*", "**/*.test.*", "**/*.spec.*"]
    }],
   // ここが重要：旧ルールを無効化して誤検知を止める
   "jsx-a11y/label-has-for": "off",
   // 「htmlFor でも 入れ子でもOK」にする（ネスト深さは必要に応じて）
   "jsx-a11y/label-has-associated-control": ["error", { assert: "either", depth: 3 }],
  },
  ignorePatterns: ["dist", "dist-ssr", "node_modules"],
};
