import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Link from 'gatsby-link'
import BgImg from 'gatsby-background-image'
import { css } from '@emotion/core'
import { secondaryColor } from '../config/colors'

export default function FeaturedTile(){
	const { featured } = useStaticQuery(graphql`
		query FeaturedTileQuery{
			featured: sanityWork(featured:{eq: true}){
				title
				slug{
					current
				}
				image{
					asset{
						fluid(maxWidth: 3000) {
							...GatsbySanityImageFluid
						}
					}
				}
			}
		}
	`)
	return (
		<Link to={`/${featured.slug.current}`}>
			<BgImg fluid={featured.image.asset.fluid} css={styles.featured}>
				<div css={styles.copy}>
					<h2 css={styles.header}>Featured Work</h2>
					<h1 css={styles.title}>{featured.title}</h1>
					<div css={styles.view}>View Project</div>
				</div>
			</BgImg>
		</Link>
	)
}

const styles = {
	featured: css`
		height: 100%;
		padding: 30px;
		color: #fff;
		:hover{
			color: ${secondaryColor};
		}
	`,
	copy: css`
		display: inline-block;
		position: absolute;
		padding: 30px;
		top: 50%;
		transform: translate(0, -50%);
	`,
	header: css`
		color: ${secondaryColor};
		margin: 0;
	`,
	title: css`
		margin: 0;
		border-bottom: 2px solid ${secondaryColor};
	`,
	view: css`
		text-align: right;
	`,
}