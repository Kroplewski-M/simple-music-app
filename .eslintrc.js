module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "plugin:prettier/recommended"],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": "off",
    "no-debugger": "off",
  },
};
