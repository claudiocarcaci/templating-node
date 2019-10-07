module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true
  },
  extends: "eslint:recommended",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "never"],
    "no-await-in-loop": "error",
    "block-scoped-var": "error",
    "curly": "error",
    "dot-location": ["error", "property"],
    "dot-notation": "warn",
    eqeqeq: ["error", "always"],
    "no-caller": "error",
    "no-else-return": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extra-bind": "error",
    "no-implicit-coercion": "error",
    "no-implied-eval": "error",
    "no-multi-spaces": "error",
    "no-new-wrappers": "error",
    "no-script-url": "error",
    "no-unmodified-loop-condition": "warn",
    "no-useless-call": "error",
    "require-await": "error",
    yoda: "warn",
    strict: ["warn", "global"],
    "no-process-env": "warn",
    "no-path-concat": "warn",
    "array-bracket-spacing": ["error", "always", { "singleValue": false }],
    "comma-dangle": ["error", "always-multiline" ],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "comma-style": ["error", "last"],
    "eol-last": ["error", "always"],
    "func-call-spacing": ["error", "never"],
    "id-length": ["error"],
    "implicit-arrow-linebreak": ["error", "beside"],
    "jsx-quotes": ["error", "prefer-double"],
    "max-depth": ["warn", 3],
    "max-len": ["warn", { "code": 120 }],
    "max-lines": ["warn", 194],
    "max-lines-per-function": ["warn", 35],
    "max-nested-callbacks": ["error", 2],
    "max-params": ["warn", 3],
    "newline-per-chained-call": ["warn", { "ignoreChainWithDepth": 2 }],
    "no-continue": "error",
    "no-lonely-if": "error",
    "no-multiple-empty-lines": "error",
    "no-trailing-spaces": "error",
    "no-underscore-dangle": "error",
    "no-unneeded-ternary": "error",
    "prefer-object-spread": "warn",
    "quote-props": ["error", "as-needed"],
    "space-before-blocks": "warn",
    "spaced-comment": ["warn", "always"],
    "arrow-parens": ["error", "always"],
    "arrow-spacing": "warn",
    "no-duplicate-imports": "error",
    "no-var": "error",
    "prefer-arrow-callback": "warn",
    "prefer-const": "error",
    "prefer-spread": "error",
    "prefer-template": "error"
  }
}
