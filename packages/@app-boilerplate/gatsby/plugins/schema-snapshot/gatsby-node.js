const { printType } = require(`graphql`)
const { exists, readFile, outputFile } = require(`fs-extra`)
const { join } = require(`path`)

// Path to snapshot relative of schema-snapshot plugin directory
const schemaFilePath = join(process.cwd(), `./src/schema.gql`)

exports.sourceNodes = async function({ actions }){
	const { createTypes } = actions

	// Use snapshot to create types if exists
	if (await exists(schemaFilePath)) {
		console.log(`\nLoading GraphQL schema...\n`)
		const typeDefs = (await readFile(schemaFilePath)).toString()
		createTypes(typeDefs)
	}
}

exports.onPostBootstrap = async function({ store }, { include }){
	const { schema } = store.getState()

	// Create snapshot if it doesn't exist
	if (!await exists(schemaFilePath)) {
		console.log(`\nCreating GraphQL schema...\n`)
		const typeDefs = include
			.map(type => printType(schema.getType(type)))
			.join(`\n\n`)
			// Prevents unfound type in markdown HTML excerpts
			.replace(`, format: ExcerptFormats = PLAIN`, ``)
		await outputFile(schemaFilePath, typeDefs + `\n`)
	}
}