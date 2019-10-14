import React, { useState } from 'react'
import { css } from '@emotion/core'
import { useAuth } from '@utils/auth'

export default function PasswordChange(){
	const { changePassword } = useAuth()
	const [success, setSuccess] = useState(false)
	const [loading, setLoading] = useState(false)

	async function resetPasswordButton(){
		setLoading(true)
		await changePassword()
		setSuccess(true)
		setLoading(false)
	}

	return (
		<div css={styles.container}>
			{loading && (
				<div>Sending email...</div>
			)}
			{!loading && !success && (
				<a href='#' onClick={e => {
					e.preventDefault()
					resetPasswordButton()
				}}>
					Change password
				</a>
			)}
			{!loading && success && <>
				<div>We've just sent you an email to reset your password.</div>
				<div>
					<a href='#' onClick={e => {
						e.preventDefault()
						resetPasswordButton()
					}}>
						Resend email
					</a>
				</div>
			</>}
		</div>
	)
}

const styles = {
	container: css`
		font-size: .8em;
	`,
}
