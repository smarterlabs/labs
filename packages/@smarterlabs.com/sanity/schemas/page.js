import { FaFile } from 'react-icons/fa'
import slugify from '../utils/slugify'
import isUnique from '../utils/is-unique'

export default {
	name: `page`,
	title: `Page`,
	type: `document`,
	icon: FaFile,
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
				source: `title`,
				isUnique,
				slugify,
			},
		},
		{
			name: `body`,
			title: `Body`,
			type: `blockContent`,
		},
	],

	preview: {
		select: {
			title: `title`,
		},
	},
}
