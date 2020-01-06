import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { css } from '@emotion/core'
import BgImg from 'gatsby-background-image'

export default function BackgroundImage({ children, css, ...props }) {
	const { cloudinary: { fluid } } = useStaticQuery(graphql`
		query BackgroundImage {
			cloudinary(publicId:{eq: "background_jgghh5"}){
				fluid(maxWidth: 3000, quality: 90) {
					...GatsbyCloudinaryFluid
				}
			}
		}
	`)
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