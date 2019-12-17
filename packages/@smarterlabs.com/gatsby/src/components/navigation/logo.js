import React from 'react'
import { css } from '@emotion/core'
import Logo from '../logo'
import { logoSize } from './config'

export default function NavLogo() {
	return (
		<div css={styles.logoContainer}>
			<div css={styles.logo}>
				<Logo />
			</div>
		</div>
	)
}

const styles = {
	logoContainer: css`
		height: ${logoSize}px;
		width: 30px;
		overflow: hidden;
		margin-left: 13px;
		margin-top: 20px;
	`,
	logo: css`
		transform: rotate(-90deg);
		width: ${logoSize}px;
		height: ${logoSize}px;
		img{
			display: block;
			width: 100%;
		}
	`,
}
