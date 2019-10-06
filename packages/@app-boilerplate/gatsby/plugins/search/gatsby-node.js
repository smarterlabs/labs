const lunr  = require(`lunr`)
const { outputJson } = require(`fs-extra`)

exports.createPages = async function({ graphql }, { query, parse }){

	// Query data to be indexed
	const res = await graphql(query)
	if(res.errors){
		console.error(res.errors)
		process.exit(1)
	}

	const data = parse(res.data)

	const itemStore = {}

	// Create index
	const index = lunr(function(){
		this.ref(`id`)
		if(data.length){
			for(let i in data[0].index){
				this.field(i)
			}
		}

		data.forEach(({ id, index, store }) => {
			this.add({
				id,
				...index,
			})
			itemStore[id] = store
		})
	})


	await outputJson(`./public/search-index.json`, {
		index,
		store: itemStore,
	})

}

// Dynamic routing
exports.onCreatePage = async function({ page, actions: { createPage } }){
	if (page.path.match(/^\/search/)) {
		page.matchPath = `/search/*`
		createPage(page)
	}
}