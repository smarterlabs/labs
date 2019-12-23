import React from 'react'
import { css } from '@emotion/core'
import { secondaryColor } from '../config/colors'

export default function Tagline(props = {}){
	const { css, ...attrs } = props
	let concatStyles = [styles.container]
	if(css){
		if(Array.isArray(css)){
			concatStyles = [
				...concatStyles,
				...css,
			]
		}
		else{
			concatStyles.push(css)
		}
	}
	return (
		<h1 css={concatStyles} {...attrs}>
			<div css={styles.inner}>
				<span css={styles.top}>Teaching Computers</span>
				<span css={styles.bottom}>to Speak <i>Human</i></span>
			</div>
		</h1>
	)
}

const styles = {
	container: css`
		font-size: 1.3em;
		display: block;
	`,
	inner: css`
		border-bottom: 2px solid ${secondaryColor};
		display: inline-block;
	`,
	top: css`
		color: #fff;
		display: block;
	`,
	bottom: css`
		color: ${secondaryColor};
		padding-bottom: 8px;
		display: inline-block;
	`,
}
