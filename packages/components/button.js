import React from 'react'
import buttonStyles from './mixins/button'

export default function Button({ children, ...props }) {
	return (
		<button css={buttonStyles} {...props}>
			{children}
		</button>
	)
}
