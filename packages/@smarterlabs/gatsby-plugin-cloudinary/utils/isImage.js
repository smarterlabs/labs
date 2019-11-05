module.exports = image => {
	const formats = [`jpeg`, `jpg`, `png`, `webp`, `gif`]
	const {
		resourceType,
		format,
	} = image
	const isImage = resourceType === `image` && formats.indexOf(format) !== -1
	return isImage
}

