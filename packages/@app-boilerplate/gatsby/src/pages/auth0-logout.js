import React, { useState } from 'react'
import Layout from 'components/layouts/default'
import Loading from 'components/loading'
import { useAuth } from 'utils/auth'

export default function Auth0LogoutPage(){
	const { navigateToPrevious } = useAuth()
	console.log(`navigateToPrevious`, navigateToPrevious)
	useState(navigateToPrevious, [])
	return (
		<Layout title='Logging Out...'>
			<Loading />
		</Layout>
	)
}