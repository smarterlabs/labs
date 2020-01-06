import React from 'react'
import { css } from '@emotion/core'
import BgImg from 'gatsby-background-image'

export default function BackgroundImage({ children, css, fluid,...props }) {
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