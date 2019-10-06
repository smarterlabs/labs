import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/layouts/default'
import PostList from 'components/blog/post-list'
import sanityToExcerpt from 'utils/sanity-to-excerpt'

export default function BlogPage({
	pageContext: {
		page,
		totalPages,
	} = {},
	data: {
		allSanityPost,
	} = {},
}){
	const posts = allSanityPost.edges.map(edges => edges.node) || []
	const description = posts.length ? `${sanityToExcerpt(posts[0]._rawBody, 15)}...` : null

	return (
		<Layout title='Blog' description={description}>
			<PostList
				posts={posts}
				page={page}
				totalPages={totalPages}
				linkPrefix='/blog'
			/>
		</Layout>
	)
}

export const query = graphql`
	query BlogPage($skip: Int!, $limit: Int!) {
		allSanityPost(
			skip: $skip,
			limit: $limit,
			sort: { order: DESC, fields: [date] }
		){
			edges{
				node{
					title
					tags
					date
					_rawBody
					slug{
						current
					}
				}
			}
		}
	}
`