import React from 'react'
import { Item } from 'react-html-email'
import Layout from '../../templates/backend-email'

export default function CMSInvitationEmail(){
	return (
		<Layout title='You have been invited'>
			<Item>
				<div>
					<h2>You have been invited</h2>
					<p>You have been invited to create a user on {`{{ .SiteURL }}`}. Follow this link to accept the invite:</p>
					<p><a href='{{ .SiteURL }}/admin/#invite_token={{ .Token }}'>Accept the invite</a></p>
				</div>
			</Item>
		</Layout>
	)
}
