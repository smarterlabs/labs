const { join } = require(`path`)
const { readFile, outputFile } = require(`fs-extra`)

const cwd = process.cwd()
const indexPath = join(cwd, `dist/index.html`)

async function patch(){
	const contents = await readFile(indexPath, `utf8`)
	// Can't do this in a plugin since Sanity doesn't add them until after this is rendered
	const newContents = contents.replace(`Connecting to Sanity.io`, `Connecting to CMS`)
	await outputFile(indexPath, newContents)
}

try{
	patch()
}
catch(err){
	console.error(err)
	process.exit(1)
}
