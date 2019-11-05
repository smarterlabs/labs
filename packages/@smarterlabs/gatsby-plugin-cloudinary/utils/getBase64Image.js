const base64Img = require(`base64-img`)
const createUrl = require(`./createUrl`)

const getBase64Image = imageProps => {
	if (!imageProps) return null
	const { image } = imageProps
	const requestUrl = createUrl(image, { width: 20 }, true)
	// TODO add caching.
	return new Promise((resolve, reject) => {
		base64Img.requestBase64(requestUrl, (err, res, body) => {
			if(err){
				reject(err)
			}
			if(res.statusCode !== 200){
				reject(`There was an issue with the request for base64: ${res.statusMessage}`)
			}
			resolve(body)
		})
	})
}

module.exports = getBase64Image