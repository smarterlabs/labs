import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

export default function TagList({ tags }) {
	return (
		<ul css={styles.list}>
			<li>Tags:</li>
			{tags && tags.map((tag, index) => (
				<li key={`tag${index}`}>
					<Link to={`/blog/tags/${tag}`}>
						{tag}
					</Link>
				</li>
			))}
		</ul>
	)
}

const styles = {
	list: css`
		list-style-type: none;
		margin: 0;
		padding: 0;
		li{
			display: inline-block;
			margin-right: 10px;
			:last-of-type{
				margin-right: 0;
			}
		}
	`,
}
