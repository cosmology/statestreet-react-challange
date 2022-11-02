<a href="http://www.digitalwebart.net/" target="_blank" rel="noreferrer">
 <img src="./public/cover.png" title="Base App">
</a>

# PNPM Monorepo, NestJS, TypeScript, Recoil, React Router 6, MUI v5, - My Transactions

## Features

- ✅ [pnpm](#pnpm)
- ✅ [CRA](#cra)
- ✅ [React](#react)
  - `v18` 🔥
- ✅ [TypeScript](#typescript)
- ✅ [NestJS](#nestjs)
- ✅ [Store](#store)
  - `Recoil`
- ✅ [Router](#router)
  - `React Router v6`
- ✅ [UI-framework](#ui-framework)
  - `MUI v5`
- ✅ [Dev tools](#dev-tools)
  - ✅ eslint

#### PNPM

- Fast
- Efficient
- Supports monorepos
- Strict

#### CRA

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). I prefer Vite but suggested was CRA

#### React

The latest version (v18) is used here. All dependencies support [React](https://reactjs.org/) v18 and the `v2` is refactored according to the latest changes and requirements of `React` v18.

#### TypeScript

Written in [TypeScript](https://www.typescriptlang.org/)

#### Router

[React Router v6](https://reactrouter.com/) is used here.

#### UI-framework

[MUI](https://mui.com/) v5 is used here. `MUI` is a fully-loaded component library, super customizable, and easy to use.

#### Store

As a store management tool [Recoil](https://recoiljs.org/) is used. Check the [frontend/src/store/transactions](./src/store/transactions/index.ts) folder for more information.

## Folder Structure

```
root
├── package.json
├── backend
│      └── requests.http
├── data
├── frontend
│    └── src
│         └── components
│         └── layuts
│         └── routes
│         └── sections
│         └── services
│         └── store
│         └── types
```

# Usage

Using npm

Install pnpm:

```bash
npm install -g pnpm
```

Using Homebrew

If you have the package manager installed, you can install pnpm using the following command:

```bash
brew install pnpm
```

Add .env

REACT_APP_CLIENT_PORT=3000
REACT_APP_SERVER_PORT=5000
REACT_APP_HOST=http://localhost

Install dependencies:

```bash
pnpm i
```

## Scripts to run project

To build

```bash
pnpm build
```

To run in development from the root run

```bash
pnpm start:dev
```

To clean

```bash
pnpm clean
```

# Reasoning

## Backend

NestJS was used for future CRUD transactions additions. Currently there are two routes:

- /transactions
- /transactions/:id

To test backend routes theres is a requests.http file for testing

## Frontend

For state managment I used [Recoil](#). Apart from less boilerplate then Redux I chose it for various caching reasons, use of selectors and many other benefits community is talking about. Also being familiar with Redux I haven't used Recoil before so I wanted to give it a shot.

[MUI v5](#) was used primarily for the tabular data presentation and caching. I am pretty familiar with the framework but for the appeal and quick turnaround it was a helper.

## Bugs

I put TODO comments in the code where I believe there is a bug that needs to be addresses. Here are the PR's that need to be opened in the order of importance.

[PR-1](#) Fix React state update on a component that hasn't mounted yet.

[PR-2](#) Combine filters in the filters selectors to combine filtering. Change from Set to Arrey keys.

[PR-3](#) Remove inline CSS into a theme

[PR-4](#) Add dark theme like I used [here](#https://github.com/cosmology/mui-v5-theme-switcher)

[PR-5](#) Add a create route to backend.

[PR-6](#) Create a add transaction form.

[PR-7](#) Apply hybrid validation from front and back like used [here](#https://github.com/cosmology/vite-monorepo-front-back-validation-ts-mui-v5)

# Dev tools

- [eslint](https://eslint.org/)

  The latest version of `eslint` with the latest recommended collection of `eslint` rules is available out of the box. It contains:

  - eslint:recommended
  - react/recommended
  - @typescript-eslint/recommended

## CRA Available Scripts

In the project directory, you can run:

### `pnpm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `pnpm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `pnpm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
