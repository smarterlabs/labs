import { FaMapMarkerAlt } from 'react-icons/fa'

export default {
	name: `location`,
	title: `Location`,
	type: `document`,
	icon: FaMapMarkerAlt,
	fields: [
		{
			name: `name`,
			title: `Name`,
			type: `string`,
		},
		{
			name: `location`,
			title: `Location`,
			type: `geopoint`,
		},
		{
			name: `address`,
			title: `Address`,
			type: `string`,
		},
		{
			name: `city`,
			title: `City`,
			type: `string`,
		},
		{
			name: `state`,
			title: `State`,
			type: `string`,
		},
		{
			name: `zip`,
			title: `Zip Code`,
			type: `string`,
		},
	],

	preview: {
		select: {
			title: `name`,
		},
	},
}
