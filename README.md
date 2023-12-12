# @meowsos/playwright-setup

![npm (scoped)](https://img.shields.io/npm/v/@meowsos/playwright-setup?style=for-the-badge)

![GitHub issues](https://img.shields.io/github/issues/meowso/playwright-hero?style=for-the-badge)

![Meow](https://bit.ly/fcc-running-cats)

## Description

Modern Eslint + Prettier setup for Playwright Typescript projects, with SonarJs and Unicorn plugins.

## Table of Contents

- [@meowsos/playwright-setup](#meowsosplaywright-setup)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Usage](#usage)
  - [Contributing](#contributing)

## Usage

1. Install the package

   ```bash
   npm i -D @meowsos/playwright-setup
   ```

2. Add the following to your `package.json`:

   ```json
   {
     "scripts": {
       "lint": "eslint . --ext .ts",
       "lint:fix": "eslint . --ext .ts --fix",
       "format": "prettier --write .",
       "format:check": "prettier --check ."
     }
   }
   ```

3. Create a `.eslintrc.js` file in the root of your project with the following:

   ```js
   module.exports = {
     extends: ['@meowsos/playwright-setup'],
   }
   ```

4. Create a `.prettierrc.js` file in the root of your project with the following:

   ```js
   module.exports = require('@meowsos/playwright-setup/prettier.config')
   ```

5. Create a `.eslintignore` file in the root of your project with the following:

   ```txt
   node_modules
   dist
   ```

6. Create a `.prettierignore` file in the root of your project with the following:

   ```txt
   node_modules
   dist
   ```

7. Create a `.vscode/settings.json` file in the root of your project with the following:

   ```json
   {
     "editor.defaultFormatter": "esbenp.prettier-vscode",
     "editor.formatOnSave": true,
     "editor.codeActionsOnSave": {
       "source.fixAll.eslint": true
     }
   }
   ```

8. Create a `.vscode/extensions.json` file in the root of your project with the following:

   ```json
   {
     "recommendations": [
       "dbaeumer.vscode-eslint",
       "esbenp.prettier-vscode",
       "ms-playwright.playwright",
       "ryanrosello-og.playwright-vscode-trace-viewer",
       "yoavbls.pretty-ts-errors"
     ]
   }
   ```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
