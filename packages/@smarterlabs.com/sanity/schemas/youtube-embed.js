export default {
	name: `youtubeEmbed`,
	title: `YouTube`,
	type: `object`,
	fields: [
		{
			name: `id`,
			title: `ID`,
			type: `string`,
			description: `The random string of letters after "v=" in the URL. Example: "https://www.youtube.com/watch?v=VwL-EFrjnGM" would be "EFrjnGM"`,
		},
		// {
		// 	name: `order`,
		// 	title: `Order`,
		// 	type: `number`,
		// 	description: `Used to determine the order that the links render in`,
		// },
	],
}
