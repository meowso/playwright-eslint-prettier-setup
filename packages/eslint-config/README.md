# @meowsos/eslint-config

![npm](https://img.shields.io/npm/v/@meowsos/eslint-config)

![GitHub issues](https://img.shields.io/github/issues/meowso/playwright-hero)

![Meow](https://bit.ly/fcc-running-cats)

## Description

ESLint config for Playwright + TypeScript + Prettier projects, with Unicorn and Sonar plugins.

Modern [Eslint](https://www.npmjs.com/package/eslint) + [Prettier](https://www.npmjs.com/package/prettier) setup for [Playwright](https://www.npmjs.com/package/playwright) Typescript projects, with [SonarJS](https://www.npmjs.com/package/eslint-plugin-sonarjs) and [ESLint Unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn) plugins.

It tries to be very agnostic while at the same time use all available, very opinionated tools from the community, to enforce code standards.

Check out the mono-repo [@meowsos/playwright-setup](https://www.npmjs.com/package/@meowsos/playwright-setup) **for the rest of the setup**.

## Table of Contents

- [@meowsos/eslint-config](#meowsoseslint-config)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Usage](#usage)
  - [Peer Dependencies](#peer-dependencies)
  - [Homepage](#homepage)
  - [License](#license)
  - [Author](#author)
  - [Contributors](#contributors)
  - [Development](#development)
    - [Scripts](#scripts)

## Usage

1. Install the package:

   ```bash
   npm install --save-dev @meowsos/eslint-config
   ```

2. Add the following to your `.eslintrc.js` file:

   ```js
   module.exports = {
     extends: ['@meowsos/eslint-config'],
   }
   ```

3. Add the following to your `package.json` file:

   ```json
   {
     "scripts": {
       "lint": "eslint . --ext .ts,.tsx",
       "lint:fix": "eslint . --ext .ts,.tsx --fix"
     }
   }
   ```

4. Run the following command to lint your code:

   ```bash
   npm run lint
   ```

---

## Peer Dependencies

Here is a simplified breakdown of each of the dependencies with URLs to the packages in npm.js:

- "@playwright/test": This is a library for writing and executing tests using Playwright, a web playwright framework. (URL: [https://www.npmjs.com/package/@playwright/test](https://www.npmjs.com/package/@playwright/test))

- "@types/node": This is a package that provides type definitions for the Node.js core libraries. (URL: [https://www.npmjs.com/package/@types/node](https://www.npmjs.com/package/@types/node))

- "@typescript-eslint/eslint-plugin": This is an ESLint plugin for TypeScript. (URL: [https://www.npmjs.com/package/@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin))

- "@typescript-eslint/parser": This is the TypeScript parser for ESLint. (URL: [https://www.npmjs.com/package/@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser))

- "eslint-config-prettier": This is an ESLint configuration that integrates with Prettier, a code formatter. (URL: [https://www.npmjs.com/package/eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier))

- "eslint-plugin-playwright": This is an ESLint plugin that provides rules for specifically testing with Playwright. (URL: [https://www.npmjs.com/package/eslint-plugin-playwright](https://www.npmjs.com/package/eslint-plugin-playwright))

- "eslint-plugin-prettier": This is an ESLint plugin that integrates with Prettier. (URL: [https://www.npmjs.com/package/eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier))

- "eslint-plugin-sonarjs": This is an ESLint plugin that provides rules for static code analysis using SonarQube, a popular code quality platform. (URL: [https://www.npmjs.com/package/eslint-plugin-sonarjs](https://www.npmjs.com/package/eslint-plugin-sonarjs))

- "eslint-plugin-unicorn": This is an ESLint plugin that provides a set of stricter rules for writing clean and maintainable JavaScript code. (URL: [https://www.npmjs.com/package/eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn))

- "eslint": This is the core ESLint package. (URL: [https://www.npmjs.com/package/eslint](https://www.npmjs.com/package/eslint))

- "prettier": This is a code formatter that automatically formats code to a consistent style. (URL: [https://www.npmjs.com/package/prettier](https://www.npmjs.com/package/prettier))

- "typescript": This is the TypeScript compiler. (URL: [https://www.typescriptlang.org](https://www.typescriptlang.org))

## Homepage

[Project Homepage](https://github.com/meowso/playwright-hero#readme)

## License

ISC License (ISC)

## Author

Meowso <m3au@pm.me> (<http://about.me/bpalma>)

## Contributors

- Manonmani Ramu <mananmani.ramu@gmail.com>

---

## Development

### Scripts

- clean: `npx delete-empty && git clean -fXd`
- bump: `npx npm-check-updates -u && npm install`
- publish-manual: `npm publish`
