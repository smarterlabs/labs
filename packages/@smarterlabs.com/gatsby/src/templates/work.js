import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import sanityToExcerpt from '@utils/sanity-to-excerpt'
import Layout from '../components/layouts/default'
import SanityBlock from '../components/sanity-block'
import { gradient } from '../config/colors'
import Hero from '../components/hero'

export default function WorkTemplate({
	data: {
		sanityWork: work,
	},
}){
	return (
		<Layout
			title={work.title}
			description={sanityToExcerpt(work._rawBody, 15)}
		>
			<Hero
				image={work.image.asset.fluid}
				title={work.title}
				subtitle={work.subtitle}
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
										{console.log(award)}
										<h4>{award.title}</h4>
										<ul>
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
		</Layout>
	)
}

const styles = {
	content: css`
		background-image: ${gradient};
		padding: 30px;
		color: #fff;
	`,
	topContent: css`
		> div{
			width: 50%;
			float: left;
		}
		:after{
			display: block;
			content: '';
			clear: both;
		}
	`,
	contentHeader: css`
		margin: 0;
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
	}
`
