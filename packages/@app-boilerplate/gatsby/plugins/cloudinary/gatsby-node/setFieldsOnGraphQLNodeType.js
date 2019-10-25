const {
	fixedNodeType,
} = require(`../gql/types`)

module.exports = ({ type }) => {
	if(type.name.match(/cloudinary/i)){
		const getTracedSVG = async args => {
			const { traceSVG } = require(`gatsby-plugin-sharp`)

			const { image, options } = args
			const {
				file: { contentType },
			} = image

			if (contentType.indexOf(`image/`) !== 0) {
				return null
			}

			// const absolutePath = await cacheImage(store, image, options)
			// const extension = path.extname(absolutePath)

			return traceSVG({
				file: {
					internal: image.internal,
					name: image.file.fileName,
					// extension,
					// absolutePath,
				},
				args: { toFormat: `` },
				fileArgs: options,
			})
		}

		const fixedNode = fixedNodeType({name: `CloudinaryFixed`, getTracedSVG })

		return {
			fixed: fixedNode,
		}
	}

	return {}
}