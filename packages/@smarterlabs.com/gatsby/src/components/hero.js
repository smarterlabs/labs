import React from 'react'
import { css } from '@emotion/core'
import BgImg from '../components/background-image'
import { secondaryColor } from '../config/colors'
import scroll from '../img/scroll.svg'
import goto from '../img/goto.svg'
import Lockup from './lockup'

export default function Hero({ image, title, subtitle, copy, link }) {
	return (
		<section css={styles.container}>
			<div css={styles.fill}>
				{image && (
					<BgImg fluid={image} />
				)}
			</div>
			<div css={styles.fill} />
			<div css={styles.content}>
				<a href={link} target='_blank' rel='noopener noreferrer' css={styles.link}>
					<img src={goto} />
				</a>
				<Lockup
					title={title}
					subtitle={subtitle}
					copy={copy}
				/>
			</div>
			<img src={scroll} css={styles.scroll} />
		</section>
	)
}

const styles = {
	link: css`
		width: 60px;
		display: block;
		@media(min-width: 1024px){
			width: 100px;
			position: absolute;
			right: -100px;
			top: 50px;
		}
	`,
	scroll: css`
		position: absolute;
		bottom: 20px;
		left: 50%;
		transform: translate(-50%, 0);
		width: 80px;
	`,
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
		font-size: .8em;
		line-height: 1.5em !important;
		@media(min-width: 800px){
			font-size: 1em;
		}
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
}