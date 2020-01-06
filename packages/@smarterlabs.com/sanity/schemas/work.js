import { FaBriefcase } from 'react-icons/fa'
import slugify from '../utils/slugify'
import isUnique from '../utils/is-unique'

export default {
	name: `work`,
	title: `Work`,
	type: `document`,
	icon: FaBriefcase,
	fields: [
		{
			name: `title`,
			title: `Title`,
			type: `string`,
		},
		{
			name: `subtitle`,
			title: `Subtitle`,
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
			name: `link`,
			title: `Link`,
			type: `string`,
		},
		{
			name: `image`,
			title: `Image`,
			type: `captionedImage`,
		},
		{
			name: `date`,
			title: `Date`,
			type: `datetime`,
			calendarTodayLabel: `Today`,
		},
		{
			name: `body`,
			title: `Body`,
			type: `blockContent`,
		},
		{
			name: `scope`,
			title: `Scope`,
			type: `blockContent`,
		},
		{
			name: `recognition`,
			title: `Recognition`,
			type: `array`,
			of: [{ type: `award` }],
		},
		{
			title: `Contributors`,
			name: `contributors`,
			type: `array`,
			of: [{ type: `reference`, to: { type: `person` } }],
		},
		{
			name: `tags`,
			title: `Tags`,
			type: `array`,
			of: [{ type: `string` }],
		},
		{
			name: `featured`,
			title: `Featured`,
			type: `boolean`,
		},
	],

	preview: {
		select: {
			title: `title`,
		},
	},
}
