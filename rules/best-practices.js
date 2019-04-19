module.exports = {
    /* Disallow or enforce spaces inside of brackets */
    'array-bracket-spacing': ['error', 'never'],

    /* Require space before/after arrow function’s arrow */
    'arrow-spacing': 'error',

    /* Require parens in arrow function arguments */      
    'arrow-parens': 'error',

    /* Disallow or enforce spaces inside of blocks after opening block and before closing block */
    'block-spacing': ['error', 'always'],

    /* Require Brace Style */
    'brace-style': 'error',

    /* Require or disallow trailing commas */      
    'comma-dangle': ['off', 'always-multiline'],

    /* Enforces spacing around commas */
    'comma-spacing': ['error', { before: false, after: true }],

    /* Comma style */
    'comma-style': ['error', 'last'],

    /* Disallow or enforce spaces inside of computed properties */
    'computed-property-spacing': ['error', 'never'],

    /* Require return statements to either always or never specify values */
    'consistent-return': 'off',

    /* Require Dot Notation */
    'dot-notation': 'off',

    /* Enforce newline before and after dot */
    'dot-location': ['error', 'property'],

    /* Require === and !== */
    'eqeqeq': ['error', 'smart'],

    /* Require or disallow newline at the end of files */
    'eol-last': 'error',

    /* Enforce consistent indentation */
    'indent': ['error', 4, { SwitchCase: 1 }],

    /* Disallow specified identifiers */
    'id-blacklist': ['off'],

    /* Enforce the consistent use of either double or single quotes in JSX attributes */
    'jsx-quotes': ['error', 'prefer-double'],

    /* Enforce consistent spacing before and after keywords */
    'keyword-spacing': 'error',

    /* Enforce consistent spacing between keys and values in object literal properties */
    'key-spacing': 'error',

    /* Enforce a maximum line length */
    'max-len': ['error', 120, 4],

    /* Require constructor names to begin with a capital letter */
    'new-cap': ['off', { capIsNew: true, newIsCap: true }],

    /* Disallow Unused Expressions */
    'no-unused-expressions': 'error',

    /* Disallow Unused Variables */
    'no-unused-vars': 'error',

    /* Disallow variable declarations from shadowing variables declared in the outer scope */
    'no-shadow': 'off',

    /* Disallow spacing between function identifiers and their applications */
    'no-spaced-func': 'error',

    /* Disallow multiple empty lines */
    'no-multiple-empty-lines': 'error',

    /* Disallow multiple spaces */
    'no-multi-spaces': ['error', { exceptions: { 'ImportDeclaration': true }}],

    /* Disallow trailing whitespace at the end of lines */
    'no-trailing-spaces': 'error',

    /* Disallow dangling underscores in identifiers */
    'no-underscore-dangle': 'off',

    /* Disallow ternary operators when simpler alternatives exist */
    'no-unneeded-ternary': 'error',

    /* Disallow unreachable code after return, throw, continue, and break statements */
    'no-unreachable': 'error',
    
    /* Require let or const instead of var */
    'no-var': 'error',

    /* Enforce variables to be declared either together or separately in functions */
    'one-var': ['error', 'never'],

    /* Enforce consistent linebreak style for operators */
    'operator-linebreak': ['error', 'after'],

    /* Require or disallow padding within blocks */
    'padded-blocks': ['off'],

    /* Require using arrow functions for callbacks */
    'prefer-arrow-callback': 'off',

    /* Suggest using const */
    'prefer-const': 'error',

    /* Suggest using template literals instead of string concatenation */
    'prefer-template': 'error',

    /* Enforce the consistent use of either backticks, double, or single quotes */
    'quotes': ['error', 'double', 'avoid-escape'],

    /* require or disallow semicolons instead of automatic semicolon insertion */
    'semi': ['error', 'always'],

    /* Require Or Disallow Space Before Blocks  */
    'space-before-blocks': ['error', 'always'],

    /* Require spacing around infix operators */
    'space-infix-ops': 'error',

    /* Require or disallow spaces before/after unary operators */
    'space-unary-ops': ['error', { words: true, nonwords: false }],

    /* Requires or disallows a whitespace (space or tab) beginning a comment */
    'spaced-comment': 'error',

    /* Require or disallow Yoda Conditions */
    'yoda': 'error',

    /* Enforce spacing around the * in generator functions */
    'generator-star-spacing': 'error',

    /* Disallow lexical declarations in case/default clauses */
    'no-case-declarations': 'off',

    /* Enforces getter/setter pairs in objects */
    'accessor-pairs': 'off',

    /* Enforces return statements in callbacks of array’s methods */
    'array-callback-return': ['error', { allowImplicit: true }],

    /* Disallow unnecessary escape usage */
    'no-useless-escape': 'off',

    /* Limit Cyclomatic Complexity */
    'complexity': ['off', 11],

    /* Require Following Curly Brace Conventions */
    'curly': ['error', 'multi-line'],

    /* Require Default Case in Switch Statements */
    'default-case': ['error', { commentPattern: '^no default$' }],

    /* Require Guarding for-in */
    'guard-for-in': 'error',

    /* Disallow Use of caller/callee */
    'no-caller': 'error',

    /* Disallow return before else */
    'no-else-return': ['error', { allowElseIf: false }],

    /* Disallow Null Comparisons */
    'no-eq-null': 'off',

    /* Disallow eval() */
    'no-eval': 'error',

    /* Disallow Extending of Native Objects */
    'no-extend-native': 'error',

    /* Disallow unnecessary function binding */
    'no-extra-bind': 'error',

    /* Disallow variable and function declarations in the global scope */
    'no-implicit-globals': 'off',

    /* Disallow Unnecessary Nested Blocks */
    'no-lone-blocks': 'error',

    /* Disallow Functions in Loops */
    'no-loop-func': 'error',

    /* Disallow Magic Numbers */
    'no-magic-numbers': ['off', {
        ignore: [],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false,
    }],

    /* Disallow Function Constructor */
    'no-new-func': 'error',

    /* Disallow Use of __proto__ */
    'no-proto': 'error',

    /* Disallow Assignment in return Statement */
    'no-return-assign': ['error', 'always'],

    /* Disallow Use of the Comma Operator */
    'no-sequences': 'error',

    /* Restrict what can be thrown as an exception */
    'no-throw-literal': 'error',

    /* Disallow unmodified conditions of loops */
    'no-unmodified-loop-condition': 'off',

    /* Disallow Unused Expressions */
    'no-unused-expressions': ['error', {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
    }],

    /* Disallow unnecessary .call() and .apply() */
    'no-useless-call': 'off',

    /* Disallow redundant return statements */
    'no-useless-return': 'error',

    /* Disallow use of the void operator */
    'no-void': 'error',

    /* Disallow Warning Comments */
    'no-warning-comments': ['off', { terms: ['todo', 'fixme', 'xxx'], location: 'start' }],
    
    /* Disallow with statements */
    'no-with': 'error',

    /* Require Radix Parameter */
    'radix': 'error',

    /* Require Variable Declarations to be at the top of their scope */
    'vars-on-top': 'error',

    /* Require IIFEs to be Wrapped */
    'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }]
};
