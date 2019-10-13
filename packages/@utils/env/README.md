# @utils/env

Exports all environment variables from both `process.env` and a `.env` file in the root.

## Usage

This module is available only in this monorepo and not on an npm registry.

```js
import { MY_SECRET } from '@utils/env'

console.log(MY_SECRET)
```