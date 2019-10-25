const {
	GraphQLString,
	GraphQLObjectType,
	GraphQLFloat,
	GraphQLInt,
} = require(`gatsby/graphql`)
const {
	ImageCropFocusType,
	ImageFormatType,
	ImageResizingBehavior,
} = require(`./schemas`)

const fixedNodeType = ({ name, getTracedSVG }) => {
	return {
		type: new GraphQLObjectType({
			name: name,
			fields: {
				tracedSVG: {
					type: GraphQLString,
					resolve: getTracedSVG,
				},
				aspectRatio: { type: GraphQLFloat },
				width: { type: GraphQLFloat },
				height: { type: GraphQLFloat },
				src: { type: GraphQLString },
				srcSet: { type: GraphQLString },
			},
		}),
		args: {
			width: {
				type: GraphQLInt,
			},
			height: {
				type: GraphQLInt,
			},
			quality: {
				type: GraphQLInt,
				defaultValue: 50,
			},
			toFormat: {
				type: ImageFormatType,
				defaultValue: ``,
			},
			resizingBehavior: {
				type: ImageResizingBehavior,
			},
			cropFocus: {
				type: ImageCropFocusType,
				defaultValue: null,
			},
			background: {
				type: GraphQLString,
				defaultValue: null,
			},
		},
		resolve: (image, options, context) => {
			console.log(`IMAGE: `, image)
			console.log(`Options: `, options)
			console.log(`Context: `, context)
			return {
				image,
				options,
				context,
			}
		},
	}
}

module.exports = {
	fixedNodeType,
}