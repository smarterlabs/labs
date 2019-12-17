import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layouts/default'
import sanityToExcerpt from '@utils/sanity-to-excerpt'
import SanityBlock from '../components/sanity-block'

export default function GenericTemplate({
	data: {
		sanityPage,
	},
}){
	const {
		title,
		_rawBody,
	} = sanityPage
	return (
		<Layout title={title} description={sanityToExcerpt(_rawBody, 15)}>
			<SanityBlock body={_rawBody} />
		</Layout>
	)
}

export const query = graphql`
	query GenericTemplate($id: String!) {
		sanityPage(
			id: { eq: $id }
		){
			_rawBody
			title
		}
	}
`
