import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '../components/layouts/default'
import WorkTile from '../components/work-tile'

export default function WorkPage({ data }){
	return (
		<Layout>
			<div css={styles.container}>
				<h1>Work</h1>
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
	container: css`
		padding: 30px;
	`,
	list: css`
		list-style-type: none;
		margin: 0;
		padding: 0;
		li{
			margin-top: 30px;
			:first-of-type{
				margin-top: 0;
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