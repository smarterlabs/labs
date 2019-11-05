import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/layouts/default'
import sanityToExcerpt from '@utils/sanity-to-excerpt'
import SanityBlock from 'components/sanity-block'

export default function GenericTemplate({
	data: {
		markdownRemark,
		sanityPage,
	},
}){
	// could probably break this out into some type
	// of switch statement or something else. It is more
	// likely someone will only have one type of data source,
	// but still would be nice to have some type of component
	// to handle all this logic
	if(sanityPage){
		const {
			title,
			_rawBody,
		} = sanityPage
		return (
			<Layout title={title} description={sanityToExcerpt(_rawBody, 15)}>
				<SanityBlock body={_rawBody} />
			</Layout>
		)
	} else if(markdownRemark){
		const {
			frontmatter: { title },
			html,
			excerpt,
		} = markdownRemark
		return (
			<Layout title={title} description={excerpt}>
				<div dangerouslySetInnerHTML={{__html: html}} />
			</Layout>
		)
	} else {
		// this is to add a default homepage
		return (
			<Layout title={`default`} description={`default homepage`}>
				<h1>Hello World: Default Homepage</h1>
				<p>Please create your pages inside of sanity or inside of "<em>src/markdown/pages</em>"</p>
			</Layout>
		)
	}
}

export const query = graphql`
	query GenericTemplate($id: String!) {
		sanityPage(
			id: { eq: $id }
		){
			_rawBody
			title
		}
		markdownRemark(
			fileAbsolutePath: { regex: "/src/markdown/pages/" }
			frontmatter: { id: { eq: $id } }
		) {
			html
			excerpt(pruneLength: 25)
			frontmatter {
				title
			}
		}
	}
`
