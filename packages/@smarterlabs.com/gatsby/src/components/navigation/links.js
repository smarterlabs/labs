import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import Link from 'gatsby-link'
import { primaryColor } from '../../config/colors'

export default function NavLinks() {
	const { sanityNavigation: { links } } = useStaticQuery(graphql`
		query NavLinks{
			sanityNavigation(title: {eq: "Main"}){
				links: linkObject{
					title
					link
				}
			}
		}
	`)
	return (
		<ul css={styles.links}>
			{links.map(({ title, link }, index) => (
				<li key={index}>
					<Link to={link}>{title}</Link>
				</li>
			))}
		</ul>
	)
}

const styles = {
	links: css`
		margin-top: 60px;
		padding: 0;
		li{
			list-style-type: none;
			margin-top: 10px;
		}
		a{
			color: #fff;
			display: block;
			:hover, :active{
				color: ${primaryColor};
				text-decoration: none;
			}
		}
	`,
}
