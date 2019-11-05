const { ensureDir, copy } = require(`fs-extra`)
const path = require(`path`)
const logger = require(`../utils/logger`)

// Check if there are any Cloudinary nodes and if gatsby-image is installed. If so,
// add fragments for Cloudinary and gatsby-image.
module.exports = async ({ store, getNodesByType }) => {
	const program = store.getState().program

	const CACHE_DIR = path.resolve(
		`${program.directory}/.cache/cloudinary/assets/`
	)

	await ensureDir(CACHE_DIR)

	if(getNodesByType(`Cloudinary`).length === 0){
		return
	}

	let gatsbyImageDoesNotExist = true
	try {
		require.resolve(`gatsby-image`)
		gatsbyImageDoesNotExist = false
	} catch(e){
		gatsbyImageDoesNotExist = true
	}

	if(gatsbyImageDoesNotExist) {
		return
	}

	// We have both gatsby-image installed as well as ImageSharp nodes so let's
	// add our fragments to .cache/fragments.
	await copy(
		require.resolve(`../gql/fragments.js`),
		`${program.directory}/.cache/fragments/cloudinary-asset-fragments.js`
	)
	logger(`Fragments added`, `info`)
}