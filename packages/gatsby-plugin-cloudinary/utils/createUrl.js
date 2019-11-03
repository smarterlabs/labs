module.exports = (image, options = {}, inSecure) => {
	const {
		cloudName,
		resourceType,
		type,
		version,
		publicId,
		format,
	} = image
	const protocol = inSecure ? `url` : `secureUrl`
	const baseUrl = image[protocol].slice(0, image[protocol].indexOf(cloudName))
	const args = {
		w: options.width,
		h: options.height,
		c: options.crop,
		fl: options.jpegProgressive ? `progressive` : null,
		q: options.quality,
		dpr: options.dpr,
		g: options.gravity,
		f: options.format,
		bg: options.background,
	}

	const transformations = []
	for(let key in args){
		if(!args[key]) continue
		transformations.push(`${key}_${args[key]}`)
	}
	const url = `${baseUrl}${cloudName}/${resourceType}/${type}/${transformations.join(`,`)}/v${version}/${publicId}.${format}`

	return url
}