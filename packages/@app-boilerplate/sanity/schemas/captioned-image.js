export default {
	name: `captionedImage`,
	title: `Image`,
	type: `image`,
	fields: [
		{
			name: `caption`,
			title: `Caption`,
			type: `string`,
			options: {
				isHighlighted: true,
			},
		},
		{
			name: `width`,
			title: `Width`,
			type: `number`,
			options: {
				isHighlighted: true,
			},
		},
		{
			name: `height`,
			title: `Height`,
			type: `number`,
			options: {
				isHighlighted: true,
			},
		},
	],
}
