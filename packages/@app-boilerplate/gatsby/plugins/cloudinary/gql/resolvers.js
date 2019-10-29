const _ = require(`lodash`)

const isImage = require(`../utils/isImage`)
const getBasicImageProps = require(`../utils/getBasicImageProps`)
const createUrl = require(`../utils/createUrl`)
const {
	CONTENTFUL_IMAGE_MAX_SIZE,
} = require(`../static/constants`)

const resolveFixed = (image, options) => {
	if (!isImage(image)) return null

	const { baseUrl, width, aspectRatio } = getBasicImageProps(image, options)

	let desiredAspectRatio = aspectRatio

	// If no dimension is given, set a default width
	if (options.width === undefined && options.height === undefined) {
		options.width = 400
	}

	// If we're cropping, calculate the specified aspect ratio.
	if (options.width !== undefined && options.height !== undefined) {
		desiredAspectRatio = options.width / options.height
	}

	// If the user selected a height and width (so cropping) and fit option
	// is not set, we'll set our defaults
	if (options.width !== undefined && options.height !== undefined) {
		if (!options.crop) {
			options.crop = `fill`
		}
	}

	// Create sizes (in width) for the image. If the width of the
	// image is 800px, the sizes would then be: 800, 1200, 1600,
	// 2400.
	//
	// This is enough sizes to provide close to the optimal image size for every
	// device size / screen resolution
	let fixedSizes = []
	fixedSizes.push(options.width)
	fixedSizes.push(options.width * 1.5)
	fixedSizes.push(options.width * 2)
	fixedSizes.push(options.width * 3)
	fixedSizes = fixedSizes.map(Math.round)

	// Filter out sizes larger than the image's width and the cloudinary image's max size.
	const filteredSizes = fixedSizes.filter(size => {
		const calculatedHeight = Math.round(size / desiredAspectRatio)
		return (
			size <= CONTENTFUL_IMAGE_MAX_SIZE &&
      calculatedHeight <= CONTENTFUL_IMAGE_MAX_SIZE &&
      size <= width
		)
	})

	// Sort sizes for prettiness.
	const sortedSizes = _.sortBy(filteredSizes)

	// Create the srcSet.
	const srcSet = sortedSizes
		.map((size, i) => {
			let resolution
			switch (i) {
				case 0:
					resolution = 1
					break
				case 1:
					resolution = 1.5
					break
				case 2:
					resolution = 2
					break
				case 3:
					resolution = 3
					break
				default:
			}
			const h = Math.round(size / desiredAspectRatio)
			return createUrl(image, {
				...options,
				width: size,
				height: h,
				dpr: resolution,
			})
		})
		.join(`,\n`)

	let pickedHeight, pickedWidth
	if (options.height) {
		pickedHeight = options.height
		pickedWidth = options.height * desiredAspectRatio
	} else {
		pickedHeight = options.width / desiredAspectRatio
		pickedWidth = options.width
	}

	return {
		aspectRatio: desiredAspectRatio,
		baseUrl,
		width: Math.round(pickedWidth),
		height: Math.round(pickedHeight),
		src: createUrl(image, {
			...options,
			width: options.width,
		}),
		srcSet,
	}
}

const resolveFluid = (image, options) => {
	if (!isImage(image)) return null

	const { baseUrl, width, aspectRatio } = getBasicImageProps(image, options)

	let desiredAspectRatio = aspectRatio

	// If no dimension is given, set a default maxWidth
	if (options.maxWidth === undefined && options.maxHeight === undefined) {
		options.maxWidth = 800
	}

	// If only a maxHeight is given, calculate the maxWidth based on the height and the aspect ratio
	if (options.maxHeight !== undefined && options.maxWidth === undefined) {
		options.maxWidth = Math.round(options.maxHeight * desiredAspectRatio)
	}

	// If we're cropping, calculate the specified aspect ratio.
	if (options.maxHeight !== undefined && options.maxWidth !== undefined) {
		desiredAspectRatio = options.maxWidth / options.maxHeight
	}

	// If the users didn't set a default sizes, we'll make one.
	if (!options.sizes) {
		options.sizes = `(max-width: ${options.maxWidth}px) 100vw, ${options.maxWidth}px`
	}

	// Create sizes (in width) for the image. If the max width of the container
	// for the rendered markdown file is 800px, the sizes would then be: 200,
	// 400, 800, 1200, 1600, 2400.
	//
	// This is enough sizes to provide close to the optimal image size for every
	// device size / screen resolution
	let fluidSizes = []
	fluidSizes.push(options.maxWidth / 4)
	fluidSizes.push(options.maxWidth / 2)
	fluidSizes.push(options.maxWidth)
	fluidSizes.push(options.maxWidth * 1.5)
	fluidSizes.push(options.maxWidth * 2)
	fluidSizes.push(options.maxWidth * 3)
	fluidSizes = fluidSizes.map(Math.round)

	// Filter out sizes larger than the image's maxWidth and the contentful image's max size.
	const filteredSizes = fluidSizes.filter(size => {
		const calculatedHeight = Math.round(size / desiredAspectRatio)
		return (
			size <= CONTENTFUL_IMAGE_MAX_SIZE &&
      calculatedHeight <= CONTENTFUL_IMAGE_MAX_SIZE &&
      size <= width
		)
	})

	// Add the original image (if it isn't already in there) to ensure the largest image possible
	// is available for small images.
	if (
		!filteredSizes.includes(parseInt(width)) &&
    parseInt(width) < CONTENTFUL_IMAGE_MAX_SIZE &&
    Math.round(width / desiredAspectRatio) < CONTENTFUL_IMAGE_MAX_SIZE
	) {
		filteredSizes.push(width)
	}

	// Sort sizes for prettiness.
	const sortedSizes = _.sortBy(filteredSizes)

	// Create the srcSet.
	const srcSet = sortedSizes
		.map(width => {
			const h = Math.round(width / desiredAspectRatio)
			return createUrl(image, {
				...options,
				width,
				height: h,
			})
		})
		.join(`,\n`)

	return {
		aspectRatio: desiredAspectRatio,
		baseUrl,
		src: createUrl(image, {
			...options,
			width: options.maxWidth,
			height: options.maxHeight,
		}),
		srcSet,
		sizes: options.sizes,
	}
}

module.exports = {
	resolveFixed,
	resolveFluid,
}