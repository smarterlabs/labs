module.exports = {
	parser: `babel-eslint`,
	extends: [
		`eslint:recommended`,
		`plugin:react/recommended`,
		`plugin:jest/recommended`,
	],
	env: {
		es6: true,
		node: true,
	},
	settings: {
		'import/core-modules': [
			`styled-jsx`,
			`styled-jsx/css`,
		],
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: `module`,
	},
	plugins: [
		`react`,
		`jest`,
	],
	globals: {
		graphql: true,
		window: true,
		document: true,
		localStorage: true,
	},
	rules: {
		indent: [
			`error`,
			`tab`,
			{
				SwitchCase: 1,
			},
		],
		'linebreak-style': [
			`error`,
			`unix`,
		],
		quotes: [
			`error`,
			`backtick`,
		],
		semi: [
			`error`,
			`never`,
		],
		'comma-dangle': [
			`error`,
			`always-multiline`,
		],
		'no-console': 0,
		'require-atomic-updates': 0,
		'no-unused-expressions': 0,
		'react/jsx-uses-vars': 1,
		'react/prop-types': 0,
		'react/no-unescaped-entities': 0,
		'react/display-name': 0,
	},
}
