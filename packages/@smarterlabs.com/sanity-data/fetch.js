const { join } = require(`path`)
const sanityClient = require(`@sanity/client`)
const { outputJson } = require(`fs-extra`)
const { api: { projectId, dataset } } = require(`../sanity/sanity.json`)

const { WEBSITE_SANITY_READ_TOKEN } = process.env

if (!WEBSITE_SANITY_READ_TOKEN){
	console.error(`process.env.WEBSITE_SANITY_READ_TOKEN not found`)
	console.warn(`You will need a WEBSITE_SANITY_READ_TOKEN in order to obtain data from the cms.`)
	// process.exit(1)
}

const cwd = process.cwd()
const client = sanityClient({
	projectId,
	dataset,
	token: WEBSITE_SANITY_READ_TOKEN,
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
