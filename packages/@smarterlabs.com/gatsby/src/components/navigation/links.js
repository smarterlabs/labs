import React from 'react'
import { css } from '@emotion/core'
import Link from 'gatsby-link'
import { primaryColor } from '../../config/colors'

export default function NavLinks() {
	return (
		<ul css={styles.links}>
			<li>
				<Link to='/design'>Design</Link>
			</li>
			<li>
				<Link to='/development'>Web & App Development</Link>
			</li>
			<li>
				<Link to='/solutions'>Solutions</Link>
			</li>
			<li>
				<Link to='/consulting'>Consulting</Link>
			</li>
			<li>
				<Link to='/work'>Work</Link>
			</li>
			<li>
				<Link to='/about-us'>About Us</Link>
			</li>
			<li>
				<Link to='/contact'>Contact</Link>
			</li>
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
