import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '../components/layouts/default'
import WorkTile from '../components/work-tile'
import BgImg from '../components/background-image-main'
import Lockup from '../components/lockup'
import { primaryColor, secondaryColor } from '../config/colors'

export default function WorkPage({ data }){
	return (
		<Layout logoColor={primaryColor}>
			<div>
				<div css={styles.header}>
					<div css={styles.background}>
						<BgImg />
					</div>
					<div css={styles.lockup}>
						<Lockup
							title='Work'
							copy='We’re building best-in-class lightweight & injectable responsive D2C Ecomm solutions that convert sales so you can focus on your brand, customer acquisition, and content.'
						/>
					</div>
				</div>
				<ul css={styles.list}>
					{data.allSanityWork.edges.map(({ node }, key) => (
						<li key={`work${key}`}>
							<WorkTile {...node} />
						</li>
					))}
				</ul>
			</div>
		</Layout>
	)
}

const styles = {
	header: css`
		@media(min-width: 1200px){
			position: relative;
		}
	`,
	lockup: css`
		padding: 30px;
		h1{
			font-size: 2em;
			color: ${secondaryColor};
			border-bottom: 2px solid #000;
		}
		@media(min-width: 1200px){
			padding-top: 200px;
			padding-bottom: 100px;
			width: 50%;
		}
	`,
	background: css`
		height: 200px;
		opacity: .5;
		@media(min-width: 1200px){
			width: 50%;
			height: 150%;
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			:after{
				content: '';
				display: block;
				position: absolute;
				bottom: 0;
				right: 0;
				left: 0;
				height: 50px;
				background-image: linear-gradient(to top, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);

			}
		}
	`,
	list: css`
		list-style-type: none;
		margin: 0;
		padding: 30px;
		> li{
			margin-top: 30px;
			:first-of-type{
				margin-top: 0;
			}
		}
		@media(min-width: 1200px){
			> li{
				width: 50%;
				:nth-of-type(2){
					margin-top: 100px;
				}
				:nth-of-type(2n-1){
					float: left;
					padding-right: 15px;
				}
				:nth-of-type(2n){
					float: right;
					padding-left: 15px;
				}
			}
			:after{
				content: '';
				display: block;
				clear: both;
			}
		}
	`,
}

export const query = graphql`
	query WorkPage {
		allSanityWork{
			edges{
				node{
					title
					tags
					slug{
						current
					}
					image{
						caption
						asset {
							fluid(maxWidth: 700) {
								...GatsbySanityImageFluid
							}
						}
					}
				}
			}
		}
	}
`