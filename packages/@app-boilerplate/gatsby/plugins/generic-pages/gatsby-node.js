const { resolve } = require(`path`)

const postTemplate = resolve(`src/templates/generic.js`)

exports.createPages = async function({ actions, graphql }){
	const { createPage } = actions

	const res = await graphql(`{
		allSanityPage{
			edges{
				node{
					id
					slug{
						current
					}
				}
			}
		}
	}`)

	if (res.errors) {
		console.error(res.errors)
		process.exit(1)
	}

	res.data.allSanityPage.edges.forEach(({
		node: {
			id,
			slug,
		},
	}) => {
		createPage({
			path: slug.current,
			component: postTemplate,
			context: {
				id,
			},
		})
	})
}