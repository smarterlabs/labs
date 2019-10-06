const { resolve, parse } = require(`path`)

const createProductPages = require(`./create-product-pages`)
const createCategoryPages = require(`./create-category-pages`)

const productPath = resolve(`src/markdown/products`)
const categoryPath = resolve(`src/markdown/categories`)

exports.createPages = async function({ actions, graphql }){
	const { createPage } = actions
	await createProductPages(createPage, graphql)
	await createCategoryPages(createPage, graphql)
}

exports.onCreateNode = function({ node, actions }){
	const { createNodeField } = actions
	const { fileAbsolutePath } = node
	if (fileAbsolutePath) {
		let slug = parse(fileAbsolutePath).name
		if (fileAbsolutePath.indexOf(productPath) === 0) {
			createNodeField({
				node,
				name: `path`,
				value: `/${node.frontmatter.category}/${slug}`,
			})
		}
		else if(fileAbsolutePath.indexOf(categoryPath) === 0){
			createNodeField({
				node,
				name: `path`,
				value: `/${slug}`,
			})
			createNodeField({
				node,
				name: `category`,
				value: slug,
			})
		}
	}
}
