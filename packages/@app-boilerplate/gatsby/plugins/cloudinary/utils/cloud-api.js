module.exports = (cloudinary, query) => {
	return new Promise((resolve, reject) => {
		cloudinary.v2.api.resources(query, (err, results) => {
			if(results.resources.length){
				resolve(results.resources)
			} else {
				reject(`\n ~Yikes! No Cloudinary files found and nodes not created. Try a better query.`)
			}
			if(err)reject(err)
		})
	})
}