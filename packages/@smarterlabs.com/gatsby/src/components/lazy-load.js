import React from 'react'
import InView from './in-view'
import Placeholder from './placeholder'

export default function LazyLoad({ children, ...props }) {
	return (
		<InView once>
			{inView => (
				<Placeholder {...props}>
					{inView && children}
				</Placeholder>
			)}
		</InView>
	)
}
