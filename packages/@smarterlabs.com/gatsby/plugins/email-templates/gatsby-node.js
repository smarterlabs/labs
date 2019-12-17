const postProcess = require(`./post-process`)

exports.onPostBuild = async function(_, {
	publicPath = `email-templates`,
	siteUrl = process.env.URL,
}){
	await postProcess(publicPath, siteUrl)
}
