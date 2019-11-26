import { FaUsers } from 'react-icons/fa'
import slugify from '../utils/slugify'
import isUnique from '../utils/is-unique'

export default {
	name: `person`,
	title: `Person`,
	type: `document`,
	icon: FaUsers,
	fields: [
		{
			name: `name`,
			title: `Name`,
			type: `string`,
		},
		{
			name: `slug`,
			title: `URL Path`,
			type: `slug`,
			options: {
				source: ({ title }) => `person/${title}`,
				isUnique,
				slugify,
			},
		},
		{
			name: `title`,
			title: `Title`,
			type: `string`,
		},
		{
			name: `website`,
			title: `Website`,
			type: `string`,
		},
		{
			name: `labsEmployee`,
			title: `Labs Employee`,
			type: `boolean`,
		},
		{
			name: `image`,
			title: `Image`,
			type: `captionedImage`,
		},
		{
			name: `bio`,
			title: `Bio`,
			type: `blockContent`,
		},
	],

	preview: {
		select: {
			title: `name`,
		},
	},
}
