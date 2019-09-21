# @smarterlabs/babel-preset

A Babel preset for JavaScript projects.

## Installation

```bash
$ npm install --save @smarterlabs/babel-preset
```

## Usage

In your `.babelrc` file:

```json
{
  "presets": [
    "@smarterlabs/babel-preset"
  ]
}
```

## Targeting Environments

Please refer to [@babel/preset-env#targets](https://babeljs.io/docs/en/babel-preset-env#targets) for a list of available options.

For a list of browsers please see [browserlist](https://github.com/ai/browserslist).

You may override our default list of targets by providing your own `targets` key.

```json
{
  "presets": [["@smarterlabs/babel-preset", {
    "targets": {
      "chrome": 50,
      "ie": 11,
      "firefox": 45
    }
  }]]
}
```
