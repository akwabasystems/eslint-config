module.exports = {
    /* Verify calls of super() in constructors */
    'constructor-super': 'error',

    /* Disallow arrow functions where they could be confused with comparisons */
    'no-confusing-arrow': ['error', {
        allowParens: true
    }],

    /* Require Object Literal Shorthand Syntax */
    'object-shorthand': ['error', 'always', {
        ignoreConstructors: false,
        avoidQuotes: true
    }],

    /* Require using arrow functions for callbacks */
    'prefer-arrow-callback': ['error', {
        allowNamedFunctions: false,
        allowUnboundThis: true
    }],

    /* Prefer destructuring from arrays and objects */
    'prefer-destructuring': ['error', {
        VariableDeclarator: {
            array: false,
            object: true
        },
        AssignmentExpression: {
            array: true,
            object: true
        },
        }, {
            enforceForRenamedProperties: false,
        }
    ],

    /* Suggest using the rest parameters instead of arguments */
    'prefer-rest-params': 'error',

    /* Suggest using spread syntax instead of .apply() */
    'prefer-spread': 'error',

    /* Enforce spacing between rest and spread operators and their expressions */
    'rest-spread-spacing': ['error', 'never']
};
