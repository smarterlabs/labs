const { resolve } = require(`path`)

const component = resolve(`src/templates/category.js`)

module.exports = async function(createPage, graphql){

	// Query category markdown data
	const result = await graphql(`{
		allSanityCategory{
			edges{
				node{
					slug {
						current
					}
				}
			}
		}
	}`)

	if (result.errors) {
		console.error(result.errors)
		process.exit(1)
	}

	result.data.allSanityCategory.edges.forEach(({
		node: {
			slug: {
				current,
			},
		},
	}) => {
		createPage({
			path: current,
			component,
			context: {
				category: current,
			},
		})
	})

}
