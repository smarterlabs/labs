import React from 'react'
import { WithAuth } from '@utils/auth'

export const wrapRootElement = ({ element }) => {
	return (
		<WithAuth>
			{element}
		</WithAuth>
	)
}
