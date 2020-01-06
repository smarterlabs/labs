import React from 'react'
import { css } from '@emotion/core'
import Layout from '../components/layouts/default'
// import Logo from '../components/logo'
import Tagline from '../components/tagline'
import Description from '../components/description'
import Featured from '../components/featured-tile'
import Services from '../components/services-tile'
import BgImg from '../components/background-image-main'
import { gradient } from '../config/colors'

export default function HomePage(){
	return (
		<Layout>
			<section css={styles.container}>
				<div css={styles.fill}>
					<BgImg />
				</div>
				<div css={[styles.fill, styles.gradient]} />
				<div css={styles.content}>
					<Tagline css={styles.tagline} />
					<Description css={styles.description} />
				</div>
			</section>
			<div>
				<div css={styles.featured}>
					<Featured />
				</div>
				<Services />
			</div>
		</Layout>
	)
}

const styles = {
	featured: css`
		height: 400px;
	`,
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
		background-image: ${gradient};
		mix-blend-mode: multiply;
	`,
}