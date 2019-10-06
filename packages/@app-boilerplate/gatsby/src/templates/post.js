import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import Link from 'gatsby-link'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'
import moment from 'moment'
import Layout from 'components/layouts/default'
import TagList from 'components/blog/tag-list'
import CommentForm from 'components/comment-form'
import Comments from 'components/comments'
import sanityToExcerpt from 'utils/sanity-to-excerpt'
import SanityBlock from 'components/sanity-block'

export default function PostTemplate({
	pageContext: {
		id,
		nextId,
		previousId,
		slug,
	} = {},
	data: {
		sanityPost: {
			_rawBody,
			title,
			tags,
			date,
			image,
		} = {},
		allSanityComment: {
			edges: comments = [],
		} = {},
		next,
		previous,
	} = {},
}){

	const mainImage = image?.asset?.fluid
	const caption = image?.caption
	const imageSrc = mainImage?.src

	const nextPost = (id === nextId) ? false : next
	const previousPost = (id === previousId) ? false : previous

	return(
		<Layout title={title} description={sanityToExcerpt(_rawBody, 15)}>
			{!!image && (
				<Helmet>
					<meta
						property='og:image'
						content={imageSrc}
					/>
				</Helmet>
			)}
			<h1>{title}</h1>
			<time dateTime={date}>{moment(date).format(`MMMM Do YYYY`)}</time>
			<TagList tags={tags} />
			{!!mainImage && (
				<Img fluid={mainImage} alt={caption} />
			)}
			<SanityBlock body={_rawBody} />
			<div>
				{nextPost && (
					<div css={styles.next}>
						<Link to={`/${nextPost.slug.current}`}>
							Next Post: {nextPost.title}
						</Link>
					</div>
				)}
				{previousPost && (
					<div>
						<Link to={`/${previousPost.slug.current}`}>
							Previous Post: {previousPost.title}
						</Link>
					</div>
				)}
			</div>
			<div css={styles.comments}>
				<Comments comments={comments} />
			</div>
			<div css={styles.commentForm}>
				<h3>Leave a comment:</h3>
				<CommentForm slug={slug} />
			</div>
		</Layout>
	)
}

const styles = {
	next: css`
		@media(min-width: 600px){
			float: right;
		}
	`,
	comments: css`
		margin: 60px 0 30px 0;
	`,
	commentForm: css`
		margin-bottom: 30px;
	`,
}

export const query = graphql`
	query PostTemplate($id: String!, $previousId: String!, $nextId: String!) {
		sanityPost(
			id: { eq: $id }
		){
			_rawBody
			title
			tags
			image{
				asset{
					fluid(maxWidth: 900) {
						...GatsbySanityImageFluid
					}
				}
				caption
			}
			date
		}

		previous: sanityPost(
			id: { eq: $previousId }
		){
			title
			slug{
				current
			}
		}

		next: sanityPost(
			id: { eq: $nextId }
		){
			title
			slug{
				current
			}
		}

		allSanityComment(
			filter: {
				published: { eq: true },
				page: {
					id: { eq: $id }
				},
			},
			sort: { order: ASC, fields: [date] }
		){
			edges{
				node{
					body
					md5
					name
					date
				}
			}
		}
	}
`
