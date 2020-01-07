import React from 'react'
import { css } from '@emotion/core'
import { secondaryColor } from '../config/colors'

export default function Hero({ title, subtitle, copy }) {
	return (
		<>
			{!!title && (
				<h1 css={styles.title}>{title}</h1>
			)}
			{!!subtitle && (
				<h2 css={styles.subtitle}>{subtitle}</h2>
			)}
			{!!copy && (
				<p css={styles.copy}>{copy}</p>
			)}
		</>
	)
}

const styles = {
	title: css`
		margin: 0;
		color: #fff;
		font-size: 1.6em;
		@media(min-width: 800px){
			font-size: 4vw;
		}
		@media(min-width: 1200px){
			font-size: 3vw;
		}
	`,
	subtitle: css`
		margin: 0;
		color: ${secondaryColor};
		border-bottom: 2px solid ${secondaryColor};
		font-style: italic;
		font-size: 1em;
		@media(min-width: 800px){
			font-size: 2.2vw;
		}
		@media(min-width: 1200px){
			font-size: 1.7vw;
		}
	`,
	copy: css`
		padding-left: 20px;
		font-size: .8em;
		line-height: 1.5em !important;
		@media(min-width: 800px){
			font-size: 1em;
		}
	`,
}