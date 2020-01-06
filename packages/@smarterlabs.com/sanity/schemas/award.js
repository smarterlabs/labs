export default {
	name: `award`,
	title: `Award`,
	type: `object`,
	fields: [
		{
			name: `title`,
			title: `Title`,
			type: `string`,
		},
		{
			name: `awards`,
			title: `Awards`,
			type: `array`,
			of: [{ type: `string` }],
		},
	],
}
