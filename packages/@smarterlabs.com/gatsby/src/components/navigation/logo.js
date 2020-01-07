import React from 'react'
import { css } from '@emotion/core'
import Link from 'gatsby-link'
import Logo from '../logo'
import { logoSize } from './config'

export default function NavLogo() {
	return (
		<Link to='/' css={styles.logoContainer}>
			<div css={styles.logo}>
				<Logo />
			</div>
		</Link>
	)
}

const styles = {
	logoContainer: css`
		height: ${logoSize}px;
		width: 30px;
		overflow: hidden;
		margin-left: 13px;
		margin-top: 20px;
		display: block;
	`,
	logo: css`
		transform: rotate(-90deg);
		width: ${logoSize}px;
		height: ${logoSize}px;
		@media(min-width: 1200px){
			display: none;
		}
		img{
			display: block;
			width: 100%;
		}
	`,
}
