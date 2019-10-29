module.exports = (image, args) => {
	let aspectRatio
	if (args.width && args.height) {
		aspectRatio = args.width / args.height
	} else {
		aspectRatio =
      image.width / image.height
	}

	return {
		baseUrl: image.url,
		contentType: image.resourceType,
		aspectRatio,
		width: image.width,
		height: image.height,
	}
}