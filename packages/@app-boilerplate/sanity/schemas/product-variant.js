export default {
	title: `Product variant`,
	name: `productVariant`,
	type: `object`,
	fields: [
		{
			title: `Color`,
			name: `color`,
			type: `string`,
		},
		{
			title: `SKU`,
			name: `sku`,
			type: `string`,
		},
		{
			name: `images`,
			title: `Images`,
			type: `array`,
			of: [
				{
					type: `image`,
					options: {
						hotspot: true,
					},
				},
			],
		},
	],
}
