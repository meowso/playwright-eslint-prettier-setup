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
    'plugin:markdown/recommended',
    'plugin:unicorn/recommended',
    'plugin:sonarjs/recommended',
  ],
  rules: {
    'playwright/expect-expect': 0,
    'playwright/no-networkidle': 0,
    'playwright/no-skipped-test': 0,
    'sonarjs/cognitive-complexity': 'error',
    'sonarjs/no-identical-expressions': 'error',
    'unicorn/no-nested-ternary': 'off',
    '@typescript-eslint/no-floating-promises': 'error',
  },
  parserOptions: {
    project: './tsconfig.json',
  },
}
