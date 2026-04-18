/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
  ],
  overrides: [
    {
      files: [
        "tests/**/*.spec.js",
        "tests/**/*.test.js",
        "tests/helpers/**/*.js", // 👈 add this
      ],
      env: {
        jest: true,
      },
    },
  ],
};
