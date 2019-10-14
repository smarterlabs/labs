import React, { useEffect } from 'react'
import { WithAuth, useAuth } from '@utils/auth'

function SessionCheck({ children }){
	const { silentAuth } = useAuth()
	useEffect(silentAuth, [])
	return children
}

export const wrapRootElement = ({ element }) => {
	return (
		<WithAuth>
			<SessionCheck>
				{element}
			</SessionCheck>
		</WithAuth>
	)
}
