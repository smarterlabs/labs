const glob = require(`globby`)
const { readFile, outputFile } = require(`fs-extra`)
const posthtml = require(`posthtml`)
const removeTags = require(`posthtml-remove-tags`)
const doctype = require(`posthtml-doctype`)
const beautify = require(`posthtml-beautify`)
const stripComments = require(`strip-html-comments`)
const removeAttributes = require(`posthtml-remove-attributes`)
const custom = require(`./posthtml-custom`)

const cwd = process.cwd()

async function emailifyHtml(contents, url){
	let promises = []
	for(let path in contents){
		let html = contents[path]

		html = stripComments(html)
		html = await posthtml()
			.use(removeTags({ tags: [
				`script`,
				`link`,
				`iframe`,
				`noscript`,
			] }))
			.use(doctype({ doctype: `HTML 4.01 Strict` }))
			.use(removeAttributes([
				`data-reactid`,
				`data-reactroot`,
				`data-react-checksum`,
				`data-react-helmet`,
			]))
			.use(custom(url))
			.use(beautify({
				rules: { indent: `tab` },
			}))
			.process(html)
		html = html.html
		promises.push(outputFile(path, html))
	}
	await Promise.all(promises)
}

module.exports = async function(path, url) {
	let paths = await glob(`${cwd}/public/${path}/**/*.html`)
	let promises = paths.map(path => {
		return readFile(path, `utf8`)
	})
	let contents = await Promise.all(promises)
	let obj = {}
	paths.forEach((path, key) => {
		obj[path] = contents[key]
	})
	await emailifyHtml(obj, url)
}
