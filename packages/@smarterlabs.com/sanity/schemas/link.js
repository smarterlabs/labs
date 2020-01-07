export default {
	name: `linkItem`,
	title: `Link Item`,
	type: `object`,
	fields: [
		{
			name: `title`,
			title: `Title`,
			type: `string`,
		},
		{
			name: `link`,
			title: `Link`,
			type: `string`,
			description: `Example: /work/smarter-labs-website`,
		},
		// {
		// 	name: `order`,
		// 	title: `Order`,
		// 	type: `number`,
		// 	description: `Used to determine the order that the links render in`,
		// },
	],
}
