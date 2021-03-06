module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  plugins: [
    'import',
  ],
  extends: [
    'eslint:recommended',
    "plugin:prettier/recommended",
  ],
  rules: {
    'strict': ['error', 'global'],

    'no-self-compare': 'error',
    'no-else-return': 'error',
    'no-throw-literal': 'error',
    'no-console': 'off',
    'no-debugger': 'off',
    'no-void': 'error',
    'no-var': 'error',
    'no-new-require': 'error',
    'no-lonely-if': 'error',
    'no-nested-ternary': 'error',
    'no-multiple-empty-lines': ['error', { 'max': 2 }],
    'no-unused-vars': ['error', {'args': 'all', 'argsIgnorePattern': '^_'}],
    'no-unused-expressions': 'off',
    'no-use-before-define': 'off',
    'prefer-const': 'error',

    'import/order': 'error'
  },
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true
  },
};
