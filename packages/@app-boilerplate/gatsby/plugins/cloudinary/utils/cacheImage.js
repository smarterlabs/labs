const crypto = require(`crypto`)
const { resolve } = require(`path`)

const axios = require(`axios`)
const { pathExists, createWriteStream, ensureDir } = require(`fs-extra`)
const createUrl = require(`./createUrl`)
const logger = require(`./logger`)

module.exports = async function cacheImage(store, image, options) {
	const program = store.getState().program
	const CACHE_DIR = resolve(`${program.directory}/.cache/cloudinary/assets/`)
	const {
		url,
		publicId,
		height: actualHeight,
		width: actualWidth,
		format,
	} = image
	const {
		width,
		height,
		maxWidth,
		maxHeight,
		crop,
		gravity,
		background,
	} = options
	const userWidth = maxWidth || width
	const userHeight = maxHeight || height

	const aspectRatio = actualHeight / actualWidth
	const resultingWidth = Math.round(userWidth || 800)
	const resultingHeight = Math.round(userHeight || resultingWidth * aspectRatio)

	const params = { width: resultingWidth, height: resultingHeight}

	if (crop) {
		params.crop = crop
	}
	if (gravity) {
		params.gravity = gravity
	}
	if (background) {
		params.background = background
	}

	const name = publicId
	const ext = format

	const optionsHash = crypto
		.createHash(`md5`)
		.update(JSON.stringify({ url, ...params }))
		.digest(`hex`)
	const nameHash = crypto
		.createHash(`md5`)
		.update(JSON.stringify(name))
		.digest(`hex`)

	const absolutePath = resolve(CACHE_DIR, `${nameHash}-${optionsHash}.${ext}`)
	const alreadyExists = await pathExists(absolutePath)

	if (!alreadyExists) {
		await ensureDir(CACHE_DIR)
		const previewUrl = createUrl(image, params)

		try {
			const response = await axios({
				method: `get`,
				url: previewUrl,
				responseType: `stream`,
			})
			await new Promise((resolve, reject) => {
				const file = createWriteStream(absolutePath)
				response.data.pipe(file)
				file.on(`finish`, resolve)
				file.on(`error`, reject)
			})

			return absolutePath
		} catch(err){
			const {
				response: {
					headers,
				},
			} = err
			const cloudinaryError = headers[`x-cld-error`]
			logger(cloudinaryError, `warning`)
			return null
		}

	}


}