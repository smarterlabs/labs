import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import sanityToExcerpt from '@utils/sanity-to-excerpt'
import Layout from '../components/layouts/default'
import BgImg from '../components/background-image'
import SanityBlock from '../components/sanity-block'

export default function WorkTemplate({
	data: {
		sanityWork: work,
	},
}){
	console.log(work)
	return (
		<Layout
			title={work.title}
			description={sanityToExcerpt(work._rawBody, 15)}
		>
			<section css={styles.container}>
				<div css={styles.fill}>
					<BgImg fluid={work.image.image.asset.fluid} />
				</div>
				<div css={[styles.fill, styles.gradient]} />
				<div css={styles.content}>
					<h1>{work.title}</h1>
					<h2>{work.subtitle}</h2>
				</div>
			</section>
			<section>
				<SanityBlock body={work._rawBody} />
			</section>
		</Layout>
	)
}

const styles = {

	content: css`
		padding: 30px;
		position: absolute;
		top: 50%;
		left: 0;
		transform: translate(0, -50%);
		color: #fff;
		@media(min-width: 800px){
			width: 600px;
			padding-left: 60px;
		}
	`,
	tagline: css`
		font-size: 7vw;
		@media(min-width: 800px){
			font-size: 1.8em;
		}
	`,
	description: css`
		padding-left: 20px;
	`,
	logo: css`
		max-width: 300px;
	`,
	container: css`
		width: 100%;
		height: 100vh;
		position: relative;
	`,
	fill: css`
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	`,
	gradient: css`
		background-image: linear-gradient(30deg, #362284 0%, #00b78d 100%);
		mix-blend-mode: multiply;
	`,
}

export const query = graphql`
	query WorkTemplate($id: String!) {
		sanityWork(
			id: { eq: $id }
		){
			title
			subtitle
			tags
			_rawBody
			_rawScope
			_rawRecognition
			image{
				caption
				asset {
					fluid(maxWidth: 3000) {
						...GatsbySanityImageFluid
					}
				}
			}
		}
	}
`
