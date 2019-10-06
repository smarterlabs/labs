const { resolve } = require(`path`)

const postsPerPage = 2
const blogTemplate = resolve(`src/templates/blog.js`)
const tagsTemplate = resolve(`src/templates/tags.js`)
const postTemplate = resolve(`src/templates/post.js`)

exports.createPages = async function({ actions, graphql }){
	const { createPage } = actions

	const res = await graphql(`{
		allSanityPost{
			edges{
				node{
					id
					tags
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

	const allTags = {}
	const posts = res.data.allSanityPost.edges.map(({
		node: {
			id,
			tags,
			slug: {
				current,
			},
		},
	}) => ({
		id,
		tags,
		slug: current,
	}))

	posts.forEach(({
		id,
		tags,
		slug,
	}, index) => {
		let previous = posts[index + 1]
		let next = posts[index - 1]

		// Create single post page
		createPage({
			path: slug,
			component: postTemplate,
			context: {
				id,
				previousId: previous ? previous.id : id,
				nextId: next ? next.id : id,
				slug,
			},
		})

		tags.forEach(tag => {
			if (!allTags[tag]) {
				allTags[tag] = 0
			}
			allTags[tag]++
		})
	})

	const totalPages = Math.ceil(posts.length / postsPerPage)
	for (let i = totalPages; i--;) {
		const page = i + 1
		let path = i === 0 ? `/blog` : `/blog/${page}`
		createPage({
			path,
			component: blogTemplate,
			context: {
				skip: i * postsPerPage,
				limit: postsPerPage,
				page,
				totalPages,
			},
		})
	}

	// Create tags pages
	for (let tag in allTags) {
		const totalPages = Math.ceil(allTags[tag] / postsPerPage)
		for (let i = totalPages; i--;) {
			const page = i + 1
			let path = i === 0 ? `/blog/tags/${tag}` : `/blog/tags/${tag}/${page}`
			createPage({
				path,
				component: tagsTemplate,
				context: {
					tag,
					skip: i * postsPerPage,
					limit: postsPerPage,
					page,
					totalPages,
				},
			})
		}
	}
}
