import { FaLink } from 'react-icons/fa'

export default {
	name: `navigation`,
	title: `Navigation`,
	type: `document`,
	icon: FaLink,
	fields: [
		{
			name: `title`,
			title: `Title`,
			type: `string`,
		},
		{
			name: `linkObject`,
			title: `Link`,
			type: `array`,
			of: [{ type: `linkItem` }],
		},
	],
}
