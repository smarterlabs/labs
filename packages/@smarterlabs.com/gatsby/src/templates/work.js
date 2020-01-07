import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import sanityToExcerpt from '@utils/sanity-to-excerpt'
import Layout from '../components/layouts/default'
import SanityBlock from '../components/sanity-block'
import { secondaryColor, gradient } from '../config/colors'
import Hero from '../components/hero'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import AllWork from '../components/all-work'

export default function WorkTemplate({
	data: {
		sanityWork: work,
	},
}){
	const img = work.image ? work.image.asset.fluid : null
	return (
		<Layout
			title={work.title}
			description={sanityToExcerpt(work._rawBody, 15)}
		>
			<Hero
				image={img}
				title={work.title}
				subtitle={work.subtitle}
				link={work.link}
				copy={`We’re building best-in-class lightweight & injectable responsive D2C Ecomm solutions that convert sales so you can focus on your brand, customer acquisition, and content.`}
			/>
			<section css={styles.content}>
				{(work._rawScope || work.recognition) && (
					<div css={styles.topContent}>
						{work._rawScope && (
							<div css={styles.scope}>
								<h3 css={styles.contentHeader}>Scope</h3>
								<div>
									<SanityBlock body={work._rawScope} />
								</div>
							</div>
						)}
						{work.recognition && (
							<div css={styles.recognition}>
								<h3 css={styles.contentHeader}>Recognition</h3>
								{work.recognition.map((award, index) => (
									<div key={index}>
										<h4 css={styles.awardHeader}>{award.title}</h4>
										<ul css={styles.awardList}>
											{award.awards.map((award, index) => (
												<li key={index}>{award}</li>
											))}
										</ul>
									</div>
								))}
							</div>
						)}
					</div>
				)}
				<SanityBlock body={work._rawBody} />
			</section>
			<section css={styles.related}>
				<AllWork exclude={work.id} />
			</section>
		</Layout>
	)
}

const styles = {
	related: css`
		padding: 30px;
		.slick-prev:before, .slick-next:before{
			color: ${secondaryColor} !important;
		}
	`,
	awardHeader: css`
		margin: 10px 0 5px 0;
		font-size: 1.3em;
		font-weight: normal;
	`,
	awardList: css`
		margin: 0;
	`,
	content: css`
		background-image: ${gradient};
		padding: 30px;
		color: #fff;
		font-size: .8em;
		@media(min-width: 1024px){
			padding: 30px 100px;
			> *{
				float: left;
				width: 50%;
			}
			:after{
				display: block;
				content: '';
				clear: both;
			}
		}
	`,
	topContent: css`
		ul{
			list-style-type: none;
			padding: 0;
		}
		@media(min-width: 600px){
			> div{
				width: 50%;
				float: left;
			}
			:after{
				display: block;
				content: '';
				clear: both;
			}
		}
		@media(min-width: 1024px){
			> div{
				float: none;
				width: 100%;
			}
		}
	`,
	contentHeader: css`
		margin: 0;
		font-size: 2em;
	`,
}

export const query = graphql`
	query WorkTemplate($id: String!) {
		sanityWork(
			id: { eq: $id }
		){
			id
			title
			subtitle
			tags
			_rawBody
			_rawScope
			link
			recognition{
				title
				awards
			}
			image{
				caption
				asset {
					fluid(maxWidth: 3000) {
						...GatsbySanityImageFluid
					}
				}
			}
		}
		allSanityWork{
			edges{
				node{
					title
					slug{
						current
					}
					image{
						asset {
							fluid(maxWidth: 300) {
								...GatsbySanityImageFluid
							}
						}
					}
				}
			}
		}
	}
`
