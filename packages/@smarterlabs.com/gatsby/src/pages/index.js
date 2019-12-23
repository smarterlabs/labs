import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import BgImg from 'gatsby-background-image'
import Layout from '../components/layouts/default'
import Logo from '../components/logo'
import Tagline from '../components/tagline'
import Description from '../components/description'

export default function HomePage({
	data: {
		cloudinary: { fluid },
	},
}){
	return (
		<Layout>
			<section css={styles.container}>
				<div css={styles.fill}>
					<BgImg fluid={fluid} css={styles.img} />
				</div>
				<div css={[styles.fill, styles.gradient]} />
				<div css={styles.content}>
					<Logo color='#fff' css={styles.logo} />
					<Tagline />
					<Description />
				</div>
			</section>
		</Layout>
	)
}

const styles = {
	content: css`
		padding: 30px;
		max-width: 600px;
		position: absolute;
		top: 0;
		left: 0;
		color: #fff;
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
	img: css`
		width: 100%;
		height: 100vh;
		mix-blend-mode: multiply;
	`,
	gradient: css`
		background-image: linear-gradient(30deg, #362284 0%, #00b78d 100%);
		mix-blend-mode: multiply;
	`,
}

export const query = graphql`
	query HomePage {
		cloudinary(publicId:{eq: "background_jgghh5"}){
			fluid(maxWidth: 3000) {
				...GatsbyCloudinaryFluid
			}
		}
	}
`