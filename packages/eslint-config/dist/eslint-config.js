"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
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
    },
    parserOptions: {
        project: './tsconfig.json',
    },
};
exports.default = config;
