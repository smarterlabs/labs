import React, { useState } from 'react'
import Layout from 'components/layouts/default'
import Loading from 'components/loading'
import { useAuth } from 'utils/auth'

export default function CallbackPage(){
	const { handleAuthentication } = useAuth()
	useState(handleAuthentication, [])
	return (
		<Layout title='Logging In...'>
			<Loading />
		</Layout>
	)
}