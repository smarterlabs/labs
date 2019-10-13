import { FaTags } from 'react-icons/fa'
import slugify from '../utils/slugify'
import isUnique from '../utils/is-unique'

export default {
	name: `product`,
	title: `Product`,
	type: `document`,
	icon: FaTags,
	fields: [
		{
			name: `title`,
			title: `Title`,
			type: `string`,
		},
		{
			name: `slug`,
			title: `URL Path`,
			type: `slug`,
			options: {
				source: ({ title }) => `product/${title}`,
				isUnique,
				slugify,
			},
		},
		{
			title: `Default variant`,
			name: `defaultProductVariant`,
			type: `productVariant`,
		},
		{
			title: `Variants`,
			name: `variants`,
			type: `array`,
			of: [
				{
					title: `Variant`,
					type: `productVariant`,
				},
			],
		},
		{
			name: `categories`,
			title: `Categories`,
			type: `array`,
			of: [
				{
					name: `category`,
					type: `reference`,
					to: {type: `category`},
				},
			],
		},
		{
			name: `body`,
			title: `Body`,
			type: `blockContent`,
		},
		{
			title: `Order`,
			name: `order`,
			type: `number`,
		},
	],

	preview: {
		select: {
			title: `title`,
			subtitle: `defaultProductVariant.sku`,
			media: `defaultProductVariant.images[0]`,
		},
	},
}
