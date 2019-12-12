import React from 'react'
import { Item } from 'react-html-email'
import Layout from '../../templates/backend-email'

export default function CMSEmailChangeEmail(){
	return (
		<Layout title='Confirm Change of Email'>
			<Item>
				<div>
					<h2>Confirm Change of Email</h2>
					<p>Follow this link to confirm the update of your email from {`{{ .Email}}`} to {`{{ .NewEmail}}`}:</p>
					<p><a href='{{ .SiteURL }}/admin/#email_change_token={{ .Token }}'>Change Email</a></p>
				</div>
			</Item>
		</Layout>
	)
}
