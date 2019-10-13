import { FaComments } from 'react-icons/fa'

export default {
	name: `comment`,
	title: `Comment`,
	type: `document`,
	icon: FaComments,
	fields: [
		{
			name: `date`,
			title: `Date`,
			type: `datetime`,
		},
		{
			name: `page`,
			title: `Page`,
			type: `reference`,
			to: [{type: `post`}],
		},
		{
			name: `name`,
			title: `Name`,
			type: `string`,
		},
		{
			name: `email`,
			title: `Email`,
			type: `string`,
		},
		{
			name: `published`,
			title: `Published`,
			type: `boolean`,
		},
		{
			name: `md5`,
			title: `MD5`,
			type: `string`,
		},
		{
			name: `body`,
			title: `Body`,
			type: `text`,
		},
	],
	preview: {
		select: {
			name: `name`,
			published: `published`,
		},
		prepare({ name, published }) {
			return {
				title: name,
				subtitle: published ? `Published` : `Not published`,
			}
		},
	},
}
