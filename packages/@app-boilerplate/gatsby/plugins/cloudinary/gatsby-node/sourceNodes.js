const cloudinary = require(`cloudinary`)
const camelcase = require(`camelcase`)

const cloudApi = require(`../utils/cloud-api`)

module.exports = async ({
	actions,
	createNodeId,
	createContentDigest,
}, options) => {
	const { createNode } = actions
	const {
		cloudName,
		apiKey,
		apiSecret,
		queryParams,
	} = options

	if(!apiKey || !cloudName || !apiSecret){
		throw new Error(`Must include all keys: apiKey: ${apiKey}, cloudName: ${cloudName}, apiSecret: ${apiSecret}`)
		// process.exit(1)
	}

	// set up cloudinary config keys
	cloudinary.config({
		cloud_name: cloudName,
		api_key: apiKey,
		api_secret: apiSecret,
	})

	try {
		const cloudResults = await cloudApi(cloudinary, queryParams)
		for(let i = cloudResults.length; i--;){
			const nodeContent = {}
			for(let key in cloudResults[i]){
				nodeContent[camelcase(key)] = cloudResults[i][key]
			}

			const nodeMeta = {
				id: createNodeId(`cloudinary-${nodeContent.publicId}`),
				parent: null,
				children: [],
				internal: {
					type: `Cloudinary`,
					content: JSON.stringify(nodeContent),
					contentDigest: createContentDigest(nodeContent),
				},
			}
			const node = {
				...nodeContent,
				...nodeMeta,
			}
			createNode(node)
		}
	} catch(e){
		console.log(`Cloudinary Error: `, e)
	}
}