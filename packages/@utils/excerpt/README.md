# @utils/excerpt

Creates an excerpt from a string.

## Usage

This module is available only in this monorepo and not on an npm registry.

```js
import createExerpt from '@utils/excerpt'

// Creates an exerpt from the first 5 words
const expert = createExerpt(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, 5)

// Logs: "Lorem ipsum dolor sit amet..."
console.log(`${excerpt}...`)

```
