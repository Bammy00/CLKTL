# Clickatell QA Task

This repository contains automated tests for the **checkout**,**Search**,**Cart** process on the [Amazon](https://www.amazon.com) website. The tests are written using [Playwright](https://playwright.dev/) and follow Page object model design pattern.

## Project Structure 📁

The project structure includes the following directories:

- `.github/workflows`: GitHub Actions workflow configuration.
- `src`: we have the pages, utils and test file here.
- `pages`: Page objects for interacting with web elements.
- `utils`: Utility functions.

## Setup ⚙️

1. Clone this repository to your local machine.
2. Install dependencies using npm:

   ```bash
   npm install
   ```

## Scripts 📜

- `npm run lint`: Lints TypeScript and JavaScript files.
- `npm run lint:fix`: Fixes linting issues.
- `npm test`: Runs tests.

## Dev Dependencies 🛠️

- `@playwright/test`: Testing framework for cross-browser testing.
- `@types/node`: TypeScript type definitions for Node.js.
- `@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser`: ESLint plugins for TypeScript.
- `allure-commandline`: Allure report generator.
- `allure-playwright`: Allure integration for Playwright.
- `eslint`, `eslint-config-prettier`, `eslint-plugin-playwright`: Linting tools.
- `typescript`: TypeScript compiler.


## Running Tests ▶️

   ```bash
   npm test
   ```

## Reporting 📊

Test results are generated in the `allure-report` directory. You can view the report by running:

```bash
npx allure serve
```