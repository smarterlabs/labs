export default {
	name: `widget`,
	title: `Widget`,
	type: `object`,
	fields: [
		{
			name: `widgetType`,
			type: `string`,
			title: `Widget Type`,
			options: {
				list: [
					`Contact Form`,
					`Homepage Carousel`,
				],
			},
		},
	],
}
