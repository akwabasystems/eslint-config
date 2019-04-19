module.exports = {

    /* Require CamelCase */
    'camelcase': 'error',

    /* Require Consistent This */
    'consistent-this': 'off',

    /* Enforce minimum and maximum identifier lengths */
    'id-length': 'off',

    /* Enforce position of line comments */
    'line-comment-position': ['off', {
        position: 'above',
        ignorePattern: 'eslint'
    }],

    /* Enforce a maximum depth that blocks can be nested */
    'max-depth': ['off', 4],

    /* Enforce or disallow newlines between operands of ternary expressions */
    'multiline-ternary': ['off', 'never'],

    /* Disallow inline comments after code */
    'no-inline-comments': 'error',

    /* Enforce consistent spacing inside braces */
    'object-curly-spacing': 'off',

    /* Require or disallow a space before function parenthesis */
    'space-before-function-paren': ['error', {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
    }],

    /* Enforce spacing around colons of switch statements */
    'switch-colon-spacing': ['error', { after: true, before: false }],

    /* Require Regex Literals to be Wrapped */
    'wrap-regex': 'off'
};
