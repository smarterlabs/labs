import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import Layout from 'components/layouts/default'
import excerpt from 'utils/sanity-to-excerpt'

export default function ProductCategoryTemplate({
	data: {
		allSanityProduct,
		sanityCategory: {
			title,
			description,
		} = {},
	} = {},
}){
	const products = allSanityProduct.edges.map(({ node }) => node) || []

	return(
		<Layout title={title} description={excerpt(description)}>
			<h1>{title}</h1>
			<div dangerouslySetInnerHTML={{__html: description}} />
			{products.map(({ title, slug }, index) => (
				<div key={`product${index}`}>
					<Link to={`/${slug.current}`}>
						<h2>{title}</h2>
					</Link>
				</div>
			))}
		</Layout>
	)
}

export const query = graphql`
	query ProductCategoryTemplate($category: String!) {
		allSanityProduct(
			filter: {
				categories: {
					elemMatch: {
						slug: {
							current: { eq: $category }
						}
					}
				}
			},
			sort: { order: ASC, fields: [order] }
		){
			edges{
				node{
					title
					slug{
						current
					}
				}
			}
		}
		sanityCategory(slug: {
			current: { eq: $category }
		}){
			title
			description
			slug{
				current
			}
		}
	}
`
