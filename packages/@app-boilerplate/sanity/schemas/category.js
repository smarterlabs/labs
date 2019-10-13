import { FaSitemap } from 'react-icons/fa'
import slugify from '../utils/slugify'
import isUnique from '../utils/is-unique'

export default {
	name: `category`,
	title: `Category`,
	type: `document`,
	icon: FaSitemap,
	fields: [
		{
			name: `title`,
			title: `Title`,
			type: `string`,
		},
		{
			name: `slug`,
			title: `Slug`,
			type: `slug`,
			options: {
				source: ({ title }) => `category/${title}`,
				isUnique,
				slugify,
			},
		},
		{
			name: `description`,
			title: `Description`,
			type: `text`,
		},
	],
}
