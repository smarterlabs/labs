const { resolve } = require(`path`)

const component = resolve(`src/templates/product.js`)

module.exports = async function(createPage, graphql){
	const result = await graphql(`{
		allSanityProduct{
			edges{
				node{
					id
					slug {
						current
					}
					defaultProductVariant{
						sku
					}
				}
			}
		}
	}`)

	if (result.errors) {
		console.error(result.errors)
		process.exit(1)
	}

	// Get product data
	result.data.allSanityProduct.edges.forEach(({ node }) => {
		createPage({
			path: node.slug.current,
			component,
			context: {
				id: node.id,
				sku: node.defaultProductVariant.sku,
			},
		})
	})
}
