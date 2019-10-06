import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/layouts/default'
import PostList from 'components/blog/post-list'
import sanityToExcerpt from 'utils/sanity-to-excerpt'

export default function TagsTemplate({
	pageContext: {
		tag,
		page,
		totalPages,
	} = {},
	data: {
		allSanityPost = [],
	} = {},
}) {
	const postsList = allSanityPost.edges.map(edge => edge.node) || []
	const description = allSanityPost.length ? `${sanityToExcerpt(allSanityPost[0]._rawBody.en, 15)}...` : null

	return (
		<Layout title={`Posts Tagged with ${tag}`} description={description}>
			<h2>Tag: {tag}</h2>
			<PostList
				posts={postsList}
				page={page}
				totalPages={totalPages}
				linkPrefix={`/blog/tags/${tag}`}
			/>
		</Layout>
	)
}

export const query = graphql`
	query TagsTemplate($tag: String!, $skip: Int!, $limit: Int!) {
		allSanityPost(
			filter: {
				tags: { in: [$tag] }
			}
			skip: $skip,
			limit: $limit,
			sort: { order: DESC, fields: [date] }
		){
			edges{
				node{
					_rawBody
					title
					tags
					date
					slug{
						current
					}
				}
			}
		}
	}
`
