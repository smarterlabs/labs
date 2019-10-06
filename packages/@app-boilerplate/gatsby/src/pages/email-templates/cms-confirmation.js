import React from 'react'
import { Item } from 'react-html-email'
import Layout from '../../templates/backend-email'

export default function CMSConfirmationEmail(){
	return (
		<Layout title='Confirm your signup'>
			<Item>
				<div>
					<h2>Confirm your signup</h2>
					<p>Follow this link to confirm your account:</p>
					<p><a href='{{ .SiteURL }}/admin/#confirmation_token={{ .Token }}'>Confirm your email</a></p>
				</div>
			</Item>
		</Layout>
	)
}
