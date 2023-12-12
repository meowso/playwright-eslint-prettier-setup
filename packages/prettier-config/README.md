# @meowsos/prettier-config

![npm](https://img.shields.io/npm/v/@meowsos/prettier-config)

![GitHub issues](https://img.shields.io/github/issues/meowso/playwright-hero)

![Meow](https://bit.ly/fcc-relaxing-cat)

## Description

This is a Prettier configuration for Playwright + TypeScript + Prettier projects, with Unicorn and Sonar plugins.

ESLint config for Playwright + TypeScript + Prettier projects, with Unicorn and Sonar plugins.

Modern [Eslint](https://www.npmjs.com/package/eslint) + [Prettier](https://www.npmjs.com/package/prettier) setup for [Playwright](https://www.npmjs.com/package/playwright) Typescript projects, with [SonarJS](https://www.npmjs.com/package/eslint-plugin-sonarjs) and [ESLint Unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn) plugins.

It tries to be very agnostic while at the same time use all available, very opinionated tools from the community, to enforce code standards.

Check out the mono-repo [@meowsos/playwright-setup](https://www.npmjs.com/package/@meowsos/playwright-setup) **for the rest of the setup**.

## Table of Contents

- [@meowsos/prettier-config](#meowsosprettier-config)
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
   npm install --save-dev @meowsos/prettier-config
   ```

2. Add the following to your `.prettierrc.js` file:

   ```js
   module.exports = require('@meowsos/prettier-config')
   ```

3. Run the following command to lint your code:

   ```bash
   npx prettier --write .
   ```

---

## Peer Dependencies

Here is a simplified breakdown of each of the dependencies with URLs to the packages in npm.js:

- "prettier": This is a code formatter. (URL: [https://www.npmjs.com/package/prettier](https://www.npmjs.com/package/prettier))

---

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
