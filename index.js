const bestPractices = require("./rules/best-practices");
const es6 = require("./rules/es6");
const variables = require("./rules/variables");
const style = require("./rules/style");

module.exports = {
    root: true,
    env: {
        es6: true,
        browser: true,
        node: true,
        jest: true
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended"
    ],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    settings: {
        react: {
            version: "16.0"
        }
    },
    plugins: [
        "react"
    ],
    rules: {
      ...bestPractices,
      ...es6,
      ...variables,
      ...style
    }
};
