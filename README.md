# @meowsos/playwright-setup

![npm (scoped)](https://img.shields.io/npm/v/@meowsos/playwright-setup)

![GitHub issues](https://img.shields.io/github/issues/meowso/playwright-hero)

![Meow](https://bit.ly/fcc-running-cats)

## Description

Modern Eslint + Prettier setup for Microsoft Playwright Typescript projects, with SonarJs and Unicorn plugins.
It tries to be very agnostic while at the same time use all available, very opinionated tools from the community, to enforce code standards.

This mono-repo was inspire in this wonderful article [here](https://blog.logrocket.com/reduce-effort-shared-eslint-prettier-configs/) and aims to be a plug-and-play solution for Microsoft Playwright projects code quality.

- [@meowsos/playwright-setup](#meowsosplaywright-setup)
  - [Description](#description)
  - [Usage](#usage)
  - [Recommended Extensions](#recommended-extensions)
  - [Contributing](#contributing)

## Usage

1. Install the package

   ```bash
   npm i -D @meowsos/eslint-config @meowsos/prettier-config
   ```

2. Add the following to your `package.json`:

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
