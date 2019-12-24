const { join } = require(`path`)
const sanityClient = require(`@sanity/client`)
const { outputJson } = require(`fs-extra`)
const { api: { projectId, dataset } } = require(`../sanity/sanity.json`)

const { SANITY_READ_TOKEN } = process.env

if (!SANITY_READ_TOKEN){
	console.error(`process.env.SANITY_READ_TOKEN not found`)
	console.warn(`You will need a SANITY_READ_TOKEN in order to obtain data from the cms.`)
	// process.exit(1)
}

const cwd = process.cwd()
const client = sanityClient({
	projectId,
	dataset,
	token: SANITY_READ_TOKEN,
	useCdn: false,
})
const siteSettingsPath = join(cwd, `dist/site-settings.json`)


async function createSiteSettings() {
	const [data] = await client.fetch(`*[_type == "siteSettings"] {title, description, keywords}`)
	await outputJson(siteSettingsPath, data || {})
}

try {
	createSiteSettings()
}
catch (err) {
	console.error(err)
	process.exit(1)
}
