const { resolve } = require(`path`)

const postTemplate = resolve(`src/templates/generic.js`)

const sanityKeyExist = !!process.env.SANITY_READ_TOKEN
exports.createPages = async function({ actions, graphql }){
	const { createPage } = actions

	const sanityQuery = `{
		pages: allSanityPage{
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

	const markdownQuery = `{
		pages: allMarkdownRemark(filter: {
			fileAbsolutePath: { regex: "/src/markdown/pages/" }
		}) {
			edges {
				node {
					frontmatter {
						id
						slug
					}
				}
			}
		}
	}`

	let res = sanityKeyExist
		? await graphql(sanityQuery)
		: await graphql(markdownQuery)

	if (res.errors) {
		console.error(res.errors)
		process.exit(1)
	}

	let homePageExist = false

	res.data && res.data.pages.edges.forEach(({ node }) => {
		let id, slug
		if(node.frontmatter) {
			id = node.frontmatter.id
			slug = node.frontmatter.slug
		} else {
			id = node.id
			slug = node.slug.current
		}
		if(slug === `/`) homePageExist = true
		createPage({
			path: slug,
			component: postTemplate,
			context: {
				id,
			},
		})
	})

	if(!homePageExist){
		createPage({
			path: `/`,
			component: postTemplate,
			context: {
				id: `default`,
			},
		})
	}
}
