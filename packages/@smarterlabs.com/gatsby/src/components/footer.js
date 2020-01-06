import React from 'react'
import { css } from '@emotion/core'
import { secondaryColor, gradient } from '../config/colors'
import ContactForm from './forms/contact-form'
import Social from './navigation/social'
import Contact from './navigation/contact-info'
import BgImg from './background-image-main'

export default function Footer() {
	return (
		<footer css={styles.footer}>
			<div css={styles.content}>
				<div css={styles.row}>
					<div css={styles.form}>
						<h1 css={styles.header}>Questions?<br />We'll respond withini 24 hours!</h1>
						<ContactForm />
					</div>
					<div css={styles.right}>
						<div css={styles.fill}>
							<BgImg />
						</div>
						<div css={[styles.fill, styles.gradient]} />
						<div css={styles.links}>
							<div css={styles.social}>
								<Social />
							</div>
							<div css={styles.contact}>
								<Contact />
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

const styles = {
	fill: css`
		@media(min-width: 1200px){
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
		}
	`,
	gradient: css`
		@media(min-width: 1200px){
			background-image: ${gradient};
			mix-blend-mode: multiply;
		}
	`,
	right: css`
		@media(min-width: 1200px){
			position: absolute;
			top: 0;
			bottom: 0;
			right: 0;
		}
	`,
	form: css`
		@media(min-width: 1200px){
			padding: 30px;
		}
	`,
	links: css`
		@media(min-width: 1200px){
			position: absolute;
			bottom: 10px;
			left: 50%;
			transform: translate(-50%, 0);
		}
	`,
	row: css`
		@media(min-width: 1200px){
			position: relative;
			> *{
				float: left;
				width: 50%;
			}
			:after{
				content: '';
				display: block;
				clear: both;
			}
		}
	`,
	footer: css`
		background-image: ${gradient};
		padding: 30px;
		@media(min-width: 1200px){
			padding: 0;
		}
	`,
	content: css`
		margin: auto;
	`,
	header: css`
		color: ${secondaryColor};
		text-align: center;
		margin: 0;
	`,
	social: css`
		margin-top: 30px;
	`,
	contact: css`
		margin-top: 30px;
		@media(min-width: 1200px){
			margin-top: 0;
		}
	`,
}