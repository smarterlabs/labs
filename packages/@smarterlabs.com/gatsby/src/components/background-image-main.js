import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { css } from '@emotion/core'
import BgImg from 'gatsby-background-image'

export default function BackgroundImage({ children, css, ...props }) {
	const data = useStaticQuery(graphql`
		query BackgroundImage {
			cloudinary(publicId:{eq: "SL_cell_hr6glq"}){
				fluid(maxWidth: 3000, quality: 90) {
					...GatsbyCloudinaryFluid
				}
			}
		}
	`)
	console.log(data)
	const { cloudinary: { fluid } } = data
	return (
		<BgImg fluid={fluid} css={[styles.img, css]} {...props}>{children}</BgImg>
	)
}

const styles = {
	img: css`
		width: 100%;
		height: 100%;
	`,
}