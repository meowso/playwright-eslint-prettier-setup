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
    'sonarjs/cognitive-complexity': 'error',
    'sonarjs/no-identical-expressions': 'error',
    // disable some rules because I don't like them
    'playwright/expect-expect': 0,
    'playwright/no-networkidle': 0,
    'playwright/no-skipped-test': 0,
    'playwright/valid-title': 0,
    'unicorn/no-nested-ternary': 'off',
  },
  parserOptions: {
    project: './tsconfig.json',
  },
}
