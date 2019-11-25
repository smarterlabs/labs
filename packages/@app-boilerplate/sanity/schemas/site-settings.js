import { MdSettings } from 'react-icons/md'

export default {
	name: `siteSettings`,
	title: `Site Settings`,
	type: `document`,
	// liveEdit: false,
	// __experimental_actions: [`update`, `publish` /* `create`, `delete` */],
	icon: MdSettings,
	fields: [
		{
			name: `title`,
			title: `Title`,
			type: `string`,
		},
		{
			name: `description`,
			title: `Description`,
			type: `text`,
		},
		{
			name: `keywords`,
			title: `Keywords`,
			type: `array`,
			of: [{ type: `string` }],
			options: {
				layout: `tags`,
			},
		},
		{
			name: `address`,
			title: `Address`,
			type: `text`,
		},
		{
			name: `phone`,
			title: `Phone Number`,
			type: `string`,
		},
		{
			name: `email`,
			title: `Contact Email`,
			type: `string`,
		},
		{
			name: `icon`,
			title: `Icon`,
			type: `image`,
		},
	],
}
