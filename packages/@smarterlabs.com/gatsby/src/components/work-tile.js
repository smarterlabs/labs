import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import { primaryColor, secondaryColor } from '../config/colors'
import { primaryFont } from '../config/fonts'
import Placeholder from './placeholder'

export default function WorkTile(node){
	return (
		<Link to={node.slug.current}>
			<Placeholder css={styles.image} ratio={[16,9]}>
				{!!node.image && (
					<Img
						fluid={node.image ? node.image.asset.fluid : null}
						backgroundColor={primaryColor}
					/>
				)}
			</Placeholder>
			<div css={styles.title}>{node.title}</div>
			<div css={styles.view}>View Project</div>
		</Link>
	)
}

const styles = {
	title: css`
		font-family: ${primaryFont};
		color: #000;
	`,
	view: css`
		color: ${secondaryColor};
		font-size: .8em;
	`,
	image: css`
		background-color: ${primaryColor};
	`,
}