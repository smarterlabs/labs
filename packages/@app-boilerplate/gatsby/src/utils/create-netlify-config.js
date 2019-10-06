const { stringify } = require(`@iarna/toml`)
const { outputFile } = require(`fs-extra`)
const config = require(`../../netlify-config`)

async function createNetlifyConfig() {
	console.log(`Creating Netlify config...`)
	const str = stringify(config)
	await outputFile(`public/netlify.toml`, str)
	console.log(`Created Netlify config`)
}

try {
	createNetlifyConfig()
}
catch(err){
	console.error(err)
	process.exit(1)
}
