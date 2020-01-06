import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { css } from '@emotion/core'
import { secondaryColor } from '../config/colors'
import { primaryFont } from '../config/fonts'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import Img from 'gatsby-image'
import Link from 'gatsby-link'

export default function AllWork({ exclude }) {
	const { allSanityWork: { edges } } = useStaticQuery(graphql`
		query AllWork {
			allSanityWork{
				edges{
					node{
						id
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
	`)
	return (
		<div>
			<h2>{exclude ? `Other` : `All`} Work</h2>
			<Slider {...{
				dots: false,
				infinite: true,
				speed: 500,
				initialSlide: 0,
				slidesToShow: 3,
				slidesToScroll: 3,
				responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3,
						},
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
						},
					},
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						},
					},
				],
			}}>
				{edges.map(({ node }, index) => {
					if(node.id === exclude) return null
					return (
						<div css={styles.slide} key={index}>
							<Link to={`/${node.slug.current}`}>
								{node.image && (
									<Img fluid={node.image.asset.fluid} />
								)}
								<div css={styles.title}>{node.title}</div>
								<div css={styles.view}>View Project</div>
							</Link>
						</div>
					)
				})}
			</Slider>
		</div>
	)
}

const styles = {
	slide: css`
		padding: 10px;
	`,
	related: css`
		padding: 30px;
		.slick-prev:before, .slick-next:before{
			color: ${secondaryColor} !important;
		}
	`,
	title: css`
		color: #000;
		font-weight: bold;
		font-family: ${primaryFont};
		font-size: .8em;
	`,
	view: css`
		color: ${secondaryColor};
		font-size: .7em;
	`,
}