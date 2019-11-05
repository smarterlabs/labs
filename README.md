# Smarter Labs Monorepo

## Requirements

- [Yarn](https://yarnpkg.com/)
- [nvm](https://github.com/creationix/nvm)
- [Lerna](https://lerna.js.org/)

## Setup for a new project

```bash
git clone git@github.com:smarterlabs/labs.git your-website
cd your-website
nvm use
yarn bootstrap
rm -rf .git
git init
```

Add environment variables to a `./.env` file in the root of your project.

It's also recommended to go through and change any settings you might need in the `packages/config` files.

## Netlify Setup

```bash
cd packages/@app-boilerplate/gatsby
rm -rf .netlify

# Skip these two lines if there's already a public folder
mkdir public
touch public/index.html

netlify deploy
```

Follow the instructions in the terminal to create a new Netlify site. When it asks what directory to deploy, input `public`. If you want to deploy to Netlify via CI, you'll need to add your Netlify auth token (`NETLIFY_AUTH_TOKEN`) to the environment variables.

## Auth0 Setup

If you need authentication, you'll need to create a new application in the [Auth0 dashboard](https://manage.auth0.com/). Set the application type to "Regular Web Application" when you create it.

Once created, go into the settings of the application and change the following settings. Make sure to replace any of the ".com" URLs with your own.

Name | Value
--- | ---
Allowed Callback URLs | `https://localhost:8000/auth0-callback, http://localhost:8000/auth0-callback, http://localhost:8888/auth0-callback, https://labs-boilerplate.netlify.com/auth0-callback`
Allowed Web Origins | `https://localhost:8000, http://localhost:8000, http://localhost:8888, https://labs-boilerplate.netlify.com`
Allowed Logout URLs | `https://localhost:8000/auth0-logout, http://localhost:8000/auth0-logout, http://localhost:8888/auth0-logout, https://labs-boilerplate.netlify.com/auth0-logout`

Then copy any environment variables you may need to Circle CI and your local `.env` file. To see the key names, check the `.env.example` file.

## Setup for an existing project

```bash
git clone REMOTE_URL folder-name
cd folder-name
nvm use
yarn bootstrap
```

Add environment variables to a `./.env` file in the root of your project.

Enabling insecure localhost in Chrome by visiting `chrome://flags/#allow-insecure-localhost` in your Chrome browser and changing the dropdown to "Enabled".

## What's included

- [Gatsby](https://www.gatsbyjs.org/docs/) is used for building a static application from React components
- [Netlify](https://www.netlify.com/docs/) configs are included for easy deployment
- [Sanity](https://www.sanity.io/docs/content-studio) is included and setup to deploy with `gatsby`
- [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) is used for dependency management
- [Lerna](https://lerna.js.org/) is used for package management
- [ESLint](https://eslint.org/docs/user-guide/) is used under the hood for JS linting
- [Babel](https://babeljs.io/docs/en/) is used under the hood for JS transpiling
- [Jest](https://jestjs.io/docs/en/getting-started) is sometimes used for testing

### Project Structure

This boilerplate is set up as a [monorepo](https://github.com/babel/babel/blob/master/doc/design/monorepo.md) with [Lerna](https://github.com/lerna/lerna). By default, the following packages are included:

- `@examplesite.com/gatsby`: The UI of the application built with [Gatsby](https://www.gatsbyjs.org/)
- `@examplesite.com/netlify-functions`: [Serverless functions](https://www.netlify.com/docs/functions/) for any logic that needs to be server side
- `@examplesite.com/sanity`: A CMS set up for deployment to [Sanity](https://www.sanity.io/docs/)
- `components`: A library of React components
- `config`: All config files are stored here
- `babel-preset-boilerplate`: The [Babel](https://babeljs.io/) preset that's used for the site and APIs
- `eslint-config-boilerplate`: The [ESLint](https://eslint.org/) config that's used for the entire project
- `utils`: An assortment of random utility functions that are shared between other packages

## Usage

- `yarn bootstrap`: Installs and symlinks all package dependencies
- `yarn dev`: Starts up live development server on your local machine
- `yarn build`: Builds application for production
- `yarn deploy`: Deploys application to staging

## Netlify Config, Redirects, and Headers

The Netify config file is located in `packages/@examplesite.com/gatsby/netlify.js` and is transpiled to the `public` directory on `yarn build`. This allows you to use environment variables and complex logic in the source config that will be injected into the public config.
