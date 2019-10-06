import React from 'react'
import { Item } from 'react-html-email'
import Layout from '../../templates/backend-email'

export default function CMSPasswordRecoveryEmail(){
	return (
		<Layout title='Reset Password'>
			<Item>
				<div>
					<h2>Reset Password</h2>
					<p>Follow this link to reset the password for your account:</p>
					<p><a href='{{ .SiteURL }}/admin/#recovery_token={{ .Token }}'>Reset Password</a></p>
				</div>
			</Item>
		</Layout>
	)
}
