import React from 'react'
import { css } from '@emotion/core'
import { secondaryColor, gradient } from '../config/colors'
import ContactForm from './forms/contact-form'
import Social from './navigation/social'
import Contact from './navigation/contact-info'

export default function Footer() {
	return (
		<footer css={styles.footer}>
			<div css={styles.content}>
				<h1 css={styles.header}>Questions?<br />We'll respond withini 24 hours!</h1>
				<div css={styles.form}>
					<ContactForm />
				</div>
				<div css={styles.social}>
					<Social />
				</div>
				<div css={styles.contact}>
					<Contact />
				</div>
			</div>
		</footer>
	)
}

const styles = {
	footer: css`
		background-image: ${gradient};
		padding: 30px;
	`,
	content: css`
		max-width: 600px;
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
	`,
}