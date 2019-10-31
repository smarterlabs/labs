const {
	GraphQLString,
	GraphQLObjectType,
	GraphQLFloat,
	GraphQLInt,
} = require(`gatsby/graphql`)
const {
	ImageFormatType,
	ImageCropType,
	ImageGravityType,
} = require(`./schemas`)
const getBase64Image = require(`../utils/getBase64Image`)
const {
	resolveFixed,
	resolveFluid,
} = require(`../gql/resolvers`)

const fixedNodeType = ({ name, getTracedSVG, store }) => {
	return {
		type: new GraphQLObjectType({
			name: name,
			fields: {
				base64: {
					type: GraphQLString,
					resolve: async (imageProps) => {
						let results
						try {
							results = await getBase64Image(imageProps)
						} catch(e) {
							results = null
						}
						return results
					},
				},
				tracedSVG: {
					type: GraphQLString,
					resolve: (imageProps) => getTracedSVG(imageProps, store),
				},
				aspectRatio: { type: GraphQLFloat },
				width: { type: GraphQLFloat },
				height: { type: GraphQLFloat },
				src: { type: GraphQLString },
				srcSet: { type: GraphQLString },
				srcWebp: {
					type: GraphQLString,
					resolve({ image, options }) {
						if (image.format === `webp` || options.format === `webp` || image.format === `svg`) {
							return null
						}

						const fixed = resolveFixed(image, {
							...options,
							format: `webp`,
						})
						return fixed.src
					},
				},
				srcSetWebp: {
					type: GraphQLString,
					resolve({ image, options }) {
						if (image.format === `webp` || options.format === `webp` || image.format === `svg`) {
							return null
						}

						const fixed = resolveFixed(image, {
							...options,
							format: `webp`,
						})
						return fixed.srcSet
					},
				},
			},
		}),
		args: {
			width: {
				type: GraphQLInt,
			},
			height: {
				type: GraphQLInt,
			},
			crop: {
				type: ImageCropType,
			},
			format: {
				type: ImageFormatType,
			},
			gravity: {
				type: ImageGravityType,
			},
			background: {
				type: GraphQLString,
				defaultValue: null,
			},
			quality: {
				type: GraphQLInt,
				defaultValue: 50,
			},
		},
		resolve: (image, options, context) => {
			const node = resolveFixed(image, options)
			return {
				...node,
				image,
				options,
				context,
			}
		},
	}
}

const fluidNodeType = ({ name, getTracedSVG, store }) => {
	return {
		type: new GraphQLObjectType({
			name: name,
			fields: {
				base64: {
					type: GraphQLString,
					resolve: async (imageProps) => {
						let results
						try {
							results = await getBase64Image(imageProps)
						} catch(e) {
							results = null
						}
						return results
					},
				},
				tracedSVG: {
					type: GraphQLString,
					resolve: (imageProps) => getTracedSVG(imageProps, store),
				},
				aspectRatio: { type: GraphQLFloat },
				src: { type: GraphQLString },
				srcSet: { type: GraphQLString },
				srcWebp: {
					type: GraphQLString,
					resolve({ image, options }) {
						if (image.format === `webp` || options.format === `webp` || image.format === `svg`) {
							return null
						}

						const fluid = resolveFluid(image, {
							...options,
							format: `webp`,
						})
						return fluid.src
					},
				},
				srcSetWebp: {
					type: GraphQLString,
					resolve({ image, options }) {
						if (image.format === `webp` || options.format === `webp` || image.format === `svg`) {
							return null
						}

						const fluid = resolveFluid(image, {
							...options,
							format: `webp`,
						})
						return fluid.srcSet
					},
				},
				sizes: { type: GraphQLString },
			},
		}),
		args: {
			maxWidth: {
				type: GraphQLInt,
			},
			maxHeight: {
				type: GraphQLInt,
			},
			crop: {
				type: ImageCropType,
			},
			format: {
				type: ImageFormatType,
			},
			gravity: {
				type: ImageGravityType,
			},
			background: {
				type: GraphQLString,
				defaultValue: null,
			},
			quality: {
				type: GraphQLInt,
				defaultValue: 50,
			},
			sizes: {
				type: GraphQLString,
			},
		},
		resolve: (image, options, context) => {
			const node = resolveFluid(image, options)
			return {
				...node,
				image,
				options,
				context,
			}
		},
	}
}

module.exports = {
	fixedNodeType,
	fluidNodeType,
}