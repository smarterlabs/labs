const { resolve } = require(`path`)

const workTemplate = resolve(`src/templates/work.js`)

exports.createPages = async function({ actions, graphql }){
	const { createPage } = actions

	const sanityQuery = `{
		allSanityWork{
			edges{
				node{
					id
					slug{
						current
					}
				}
			}
		}
	}`

	let res = await graphql(sanityQuery)

	if (res.errors) {
		console.error(res.errors)
		process.exit(1)
	}

	res.data && res.data.allSanityWork.edges.forEach(({ node }) => {
		const id = node.id
		const slug = node.slug.current
		createPage({
			path: slug,
			component: workTemplate,
			context: {
				id,
			},
		})
	})
}
