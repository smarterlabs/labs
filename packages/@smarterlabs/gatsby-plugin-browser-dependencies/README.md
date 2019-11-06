# @smarterlabs/gatsby-plugin-browser-dependencies

Excludes browser-only dependencies from your SSR builds in Gatsby.

## Installation

```bash
yarn add @smarterlabs/gatsby-plugin-browser-dependencies
```

or

```bash
npm install --save @smarterlabs/gatsby-plugin-browser-dependencies
```

## Usage

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `@smarterlabs/gatsby-plugin-browser-dependencies`,
      options: {
        dependencies: [
          `auth-js`,
          `browser-only-module`,
        ]
      },
    },
  ],
}
```
