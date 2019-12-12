import React from 'react'
import { css } from '@emotion/core'
import { secondaryColor } from '../config/colors'

export default function Tagline(){
	return (
		<h1 css={styles.container}>
			<span css={styles.top}>Teaching Computers</span>
			<span css={styles.bottom}>to Speak <i>Human</i></span>
		</h1>
	)
}

const styles = {
	container: css`
		font-size: 1.3em;
		span{
			display: inline-block;
		}
	`,
	top: css`
		color: #fff;
	`,
	bottom: css`
		color: ${secondaryColor};
		padding-bottom: 8px;
		border-bottom: 2px solid ${secondaryColor};
	`,
}
