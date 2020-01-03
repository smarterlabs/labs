import React from 'react'
import { css } from '@emotion/core'
import {
	primaryColor,
	secondaryColor,
	primaryActiveColor,
} from '../../config/colors'
import { primaryFont } from '../../config/fonts'

export default function Button({ children, ...props }) {
	return (
		<button css={styles.button} {...props}>
			{children}
		</button>
	)
}

const styles = {
	button: css`
		font-family: ${primaryFont};
		background-color: ${secondaryColor};
		color: ${primaryColor};
		cursor: pointer;
		padding: 10px 30px;
		font-size: 1.1em;
		border: 0;
		outline: 0;
		user-select: none;
		&:focus, &:hover, &:active{
			background-color: ${primaryActiveColor};
			color: ${secondaryColor};
		}
		&:active{
			transform: translate(0, 2px);
		}
		&:disabled{
			background-color: #ccc;
			cursor: default;
		}
	`,
}