import React from 'react'
import { css } from '@emotion/core'
import { successColor, lightSuccessColor } from 'config/colors'

export default function SuccessMessage({ children }){
	return (
		<div css={styles.box}>
			{children}
		</div>
	)
}

const styles = {
	box: css`
		border: 1px solid ${successColor};
		background-color: ${lightSuccessColor};
		padding: 10px 15px;
		margin-bottom: 30px;
	`,
}
