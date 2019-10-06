import React from 'react'
import { css } from '@emotion/core'
import linkMixin from '../styles/mixins/link'
import EmailTemplate from 'components/layouts/email'

export default function BackendEmail({ title, children }) {
	return (
		<EmailTemplate title={title}>
			<div css={styles.wrapper}>
				<p css={styles.img}>
					<img src='/backend-logo.png' />
				</p>
				{children}
			</div>
		</EmailTemplate>
	)
}

const styles = {
	wrapper: css`
		max-width: 600px;
		padding: 20px;
		margin: 0 auto;
		a{
			${linkMixin};
		}
	`,
	img: css`
		text-align: center;
		img{
			width: 300px;
		}
	`,
}