import React from 'react'
import { css } from '@emotion/core'

export default function Header(){
	return (
		<header css={styles.header}>
			Header
		</header>
	)
}

const styles = {
	header: css`
		padding: 30px;
	`,
}
