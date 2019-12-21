import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import Img from 'gatsby-image'
import Layout from '../components/layouts/default'

export default function HomePage({
	data: {
		cloudinary: { fluid },
	},
}){
	return (
		<Layout>
			<div css={styles.hero}>
				<Img fluid={fluid} />
			</div>
		</Layout>
	)
}

const styles = {
	hero: css`
		width: 100%;
		height: 100vh;
		overflow: hidden;
	`,
}

export const query = graphql`
	query HomePage {
		cloudinary(publicId:{eq: "background_mbfepm"}){
			id
			fluid(maxWidth: 4000) {
				...GatsbyCloudinaryFluid
			}
		}
	}

`