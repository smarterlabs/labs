import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import BgImg from 'gatsby-background-image'
import Layout from '../components/layouts/default'
// import Logo from '../components/logo'
import Tagline from '../components/tagline'
import Description from '../components/description'
import Featured from '../components/featured-tile'

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
					<Tagline css={styles.tagline} />
					<Description css={styles.description} />
				</div>
			</section>
			<div>
				<div css={styles.featured}>
					<Featured />
				</div>
				<section css={styles.services}>
					<h2>Services</h2>
					<div>We do these things and do them well.</div>
					<ul>
						<li>
							<h3>Digital</h3>
							<ul>
								<li>Website Development</li>
								<li>Mobile Application Development</li>
								<li>Desktop Application Development</li>
								<li>UX/UI Design</li>
								<li>Custom Branded Experiences</li>
							</ul>
						</li>
						<li>
							<h3>Design</h3>
							<ul>
								<li>Website Development</li>
								<li>Mobile Application Development</li>
								<li>Desktop Application Development</li>
								<li>UX/UI Design</li>
								<li>Custom Branded Experiences</li>
							</ul>
						</li>
						<li>
							<h3>Support</h3>
							<ul>
								<li>Website Development</li>
								<li>Mobile Application Development</li>
								<li>Desktop Application Development</li>
								<li>UX/UI Design</li>
								<li>Custom Branded Experiences</li>
							</ul>
						</li>
						<li>
							<h3>Asset Creation</h3>
							<ul>
								<li>Website Development</li>
								<li>Mobile Application Development</li>
								<li>Desktop Application Development</li>
								<li>UX/UI Design</li>
								<li>Custom Branded Experiences</li>
							</ul>
						</li>
					</ul>
				</section>
			</div>
		</Layout>
	)
}

const styles = {
	featured: css`
		height: 400px;
	`,
	services: css`
		> ul{
			list-style-type: none;
			margin: 0;
			padding: 0;
			column-count: 2;
			> li{
				padding-top: 20px;
			}
		}
		h3{
			margin-top: 0;
		}
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
	img: css`
		width: 100%;
		height: 100%;
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
			fluid(maxWidth: 3000, quality: 90) {
				...GatsbyCloudinaryFluid
			}
		}
	}
`