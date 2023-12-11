'use strict'
module.exports = {
  parser: '@typescript-eslint/parser',
  globals: {
    MyGlobal: true,
  },
  plugins: ['@typescript-eslint', 'sonarjs'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:playwright/playwright-test',
    'plugin:prettier/recommended',
    'plugin:unicorn/recommended',
    'plugin:sonarjs/recommended',
  ],
  rules: {
    '@typescript-eslint/no-floating-promises': 'error',
  },
  parserOptions: {
    project: './tsconfig.json',
  },
}
