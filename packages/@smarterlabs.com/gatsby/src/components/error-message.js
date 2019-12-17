import React from 'react'
import { css } from '@emotion/core'
import { errorColor, lightErrorColor } from 'config/colors'

export default function ErrorMessage({ children }){
	return (
		<div css={styles.box}>
			{children}
		</div>
	)
}

const styles = {
	box: css`
		border: 1px solid ${errorColor};
		background-color: ${lightErrorColor};
		padding: 10px 15px;
		margin-bottom: 30px;
	`,
}
