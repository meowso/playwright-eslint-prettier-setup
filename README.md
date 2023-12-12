# @meowsos/playwright-setup

![npm (scoped)](https://img.shields.io/npm/v/@meowsos/playwright-setup) ![GitHub issues](https://img.shields.io/github/issues/meowso/playwright-hero)

![Meow](https://bit.ly/fcc-running-cats)

## Description

Modern [Eslint](https://www.npmjs.com/package/eslint) + [Prettier](https://www.npmjs.com/package/prettier) setup for [Playwright](https://www.npmjs.com/package/playwright) Typescript projects, with [SonarJS](https://www.npmjs.com/package/eslint-plugin-sonarjs) and [ESLint Unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn) plugins.

It tries to be very agnostic while at the same time use all available, very opinionated tools from the community, to enforce and automate code quality standards and conventions.

This mono-repo was inspire in this wonderful article [here](https://blog.logrocket.com/reduce-effort-shared-eslint-prettier-configs/) and aims to be a plug-and-play solution for Microsoft Playwright only code repositories.

## Table of Contents

- [@meowsos/playwright-setup](#meowsosplaywright-setup)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Usage](#usage)
  - [Recommended Extensions](#recommended-extensions)
  - [Contributing](#contributing)

## Usage

1. Install the package

   ```bash
   npm i -D @meowsos/eslint-config @meowsos/prettier-config
   ```

   Make sure you have a tsconfig.json file in your project and that Typescript is initialized, you can try with `npx tsc --init`.

2. Add the following to your `package.json`: (The rules here are just an example on how to override them if you wish, don't add them.)

   ```json
   {
     "scripts": {
       "lint": "eslint . --ext .ts",
       "lint:fix": "eslint . --ext .ts --fix",
       "format": "prettier --write .",
       "format:check": "prettier --check ."
     },
     "prettier": "@meowsos/prettier-config",
     "eslintConfig": {
       "extends": "@meowsos/eslint-config",
       "rules": {
         "playwright/expect-expect": 0,
         "playwright/no-networkidle": 0,
         "playwright/no-skipped-test": 0,
         "playwright/valid-title": 0,
         "unicorn/no-nested-ternary": "off"
       }
     }
   }
   ```

3. Create a `.eslintignore` file in the root of your project with the following:

   ```txt
   node_modules
   dist
   ```

4. Create a `.prettierignore` file in the root of your project with the following:

   ```txt
   node_modules
   dist
   ```

5. Create a `.vscode/settings.json` file in the root of your project with the following:

   ```json
   {
     "editor.defaultFormatter": "esbenp.prettier-vscode",
     "editor.formatOnSave": true,
     "editor.codeActionsOnSave": {
       "source.fixAll.eslint": true
     }
   }
   ```

## Recommended Extensions

We recommend the following extensions for VSCode, which will be automatically suggested to be installed if you add the following setup.

Create a `.vscode/extensions.json` file in the root of your project with the following:

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
