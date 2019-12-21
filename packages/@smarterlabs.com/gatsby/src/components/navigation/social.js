import React from 'react'
import { css } from '@emotion/core'

export default function NavSocial() {
	return (
		<ul css={styles.container}>
			<li>
				<a
					href='https://www.facebook.com/smarterlabsllc/'
					target='_blank'
					rel='noopener noreferrer'
				>
					Facebook
				</a>
			</li>
			<li>
				<a
					href='https://github.com/smarterlabs'
					target='_blank'
					rel='noopener noreferrer'
				>
					GitHub
				</a>
			</li>
		</ul>
	)
}

const styles = {
	container: css`
		list-style: none;
		li{
			display: inline-block;
		}
	`,
}
