import React from 'react'
import { css } from '@emotion/core'
import BgImg from '../components/background-image'
import { gradient, secondaryColor } from '../config/colors'

export default function Hero({ image, title, subtitle, copy }) {
	return (
		<section css={styles.container}>
			<div css={styles.fill}>
				{image && (
					<BgImg fluid={image} />
				)}
			</div>
			<div css={styles.fill} />
			<div css={styles.content}>
				<h1 css={styles.title}>{title}</h1>
				<h2 css={styles.subtitle}>{subtitle}</h2>
				<p css={styles.copy}>{copy}</p>
			</div>
		</section>
	)
}

const styles = {
	title: css`
		margin: 0;
		color: #fff;
	`,
	subtitle: css`
		margin: 0;
		color: ${secondaryColor};
		border-bottom: 2px solid ${secondaryColor};
	`,
	content: css`
		padding: 30px;
		position: absolute;
		top: 50%;
		left: 0;
		transform: translate(0, -50%);
		color: #fff;
		@media(min-width: 800px){
			width: 600px;
			padding-left: 60px;
		}
	`,
	copy: css`
		padding-left: 20px;
	`,
	container: css`
		width: 100%;
		height: 100vh;
		position: relative;
	`,
	fill: css`
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	`,
	gradient: css`
		background-image: ${gradient};
		mix-blend-mode: multiply;
	`,
}