"use strict";


 module.exports = {
   root: true,
   env: {
     es6: true,
     browser: true,
     node: true
   },
   extends: 'eslint:recommended',
   parser: 'babel-eslint',
   parserOptions: {
     ecmaVersion: 7,
     sourceType: 'module',
     ecmaFeatures: {
       jsx: true,
       experimentalObjectRestSpread: true
     }
   },
   rules: {

     /**------------------------------ Best practices ----------------------------------------*/
     'array-bracket-spacing': ['error', 'never'],
     'arrow-spacing': 'error',
     'arrow-parens': 'error',
     'block-spacing': ['error', 'always'],
     'brace-style': 'error',
     'comma-dangle': ['off', 'always-multiline'],
     'comma-spacing': ['error', { before: false, after: true }],
     'comma-style': ['error', 'last'],
     'computed-property-spacing': ['error', 'never'],
     'consistent-return': 'off',
     'dot-notation': 'off',
     'dot-location': ['error', 'property'],
     'eqeqeq': ['error', 'smart'],
     'eol-last': 'error',
     'indent': ['error', 4, { SwitchCase: 4 }],
     'id-blacklist': ['off'],
     'jsx-quotes': ['error', 'prefer-double'],
     'keyword-spacing': 'error',
     'key-spacing': 'error',
     'max-len': ['error', 120, 4],
     'new-cap': ['off', { capIsNew: true, newIsCap: true }],
     'no-unused-expressions': 'error',
     'no-unused-vars': 'error',
     'no-shadow': 'off',
     'no-spaced-func': 'error',
     'no-multiple-empty-lines': 'error',
     'no-multi-spaces': ['error', { exceptions: { 'ImportDeclaration': true }}],
     'no-undef': 'error',
     'no-empty-pattern': 'error',
     'no-dupe-keys': 'error',
     'no-dupe-args': 'error',
     'no-duplicate-case': 'error',
     'no-cond-assign': 'error',
     'no-extra-semi': 'error',
     'no-extra-boolean-cast': 'error',
     'no-trailing-spaces': 'error',
     'no-underscore-dangle': 'off',
     'no-unneeded-ternary': 'error',
     'no-unreachable': 'error',
     'no-var': 'error',
     'one-var': ['error', 'never'],
     'operator-linebreak': ['error', 'after'],
     'padded-blocks': ['off'],
     'prefer-arrow-callback': 'off',
     'prefer-const': 'error',
     'prefer-template': 'error',
     'quotes': ['error', 'double', 'avoid-escape'],
     'semi': ['error', 'always'],
     'space-before-blocks': ['error', 'always'],
     'space-infix-ops': 'error',
     'space-unary-ops': ['error', { words: true, nonwords: false }],
     'spaced-comment': 'error',
     'yoda': 'error',
     'generator-star-spacing': 'error',
     'no-case-declarations': 'off'

   }
 };

