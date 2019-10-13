import { FaPen } from 'react-icons/fa'
import slugify from '../utils/slugify'
import isUnique from '../utils/is-unique'

export default {
	name: `post`,
	title: `Post`,
	type: `document`,
	icon: FaPen,
	fields: [
		{
			name: `title`,
			title: `Title`,
			type: `string`,
		},
		{
			name: `date`,
			title: `Date`,
			type: `datetime`,
			calendarTodayLabel: `Today`,
		},
		{
			name: `slug`,
			title: `URL Path`,
			type: `slug`,
			options: {
				source: ({ title }) => `post/${title}`,
				isUnique,
				slugify,
			},
		},
		{
			name: `tags`,
			title: `Tags`,
			type: `array`,
			of: [{type: `string`}],
		},
		{
			name: `image`,
			title: `Image`,
			type: `captionedImage`,
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
