# Playwright ESLint Configuration

This repository provides an ESLint configuration specifically tailored for Playwright projects written in TypeScript. ESLint is a powerful tool for identifying and reporting code quality issues in JavaScript and TypeScript codebases.

```sh
npm install eslint @playwright/eslint-config --save-dev
```

## Usage

Add the following to your `.eslintrc.js` file:

```js
module.exports = {
  extends: ['@playwright'],
}
```
