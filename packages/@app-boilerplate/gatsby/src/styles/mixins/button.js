import { css } from '@emotion/core'
import {
	white,
	primaryColor,
	primaryActiveColor,
} from '../colors'
import { primaryFont } from '../fonts'

const buttonStyles = css`
	font-family: ${primaryFont};
	background-color: ${primaryColor};
	color: ${white};
	cursor: pointer;
	border-radius: 8px;
	padding: 10px 30px;
	font-size: 1.1em;
	text-transform: uppercase;
	border: 0;
	outline: 0;
	user-select: none;
	&:focus, &:hover, &:active{
		background-color: ${primaryActiveColor};
	}
	&:active{
		transform: translate(0, 2px);
	}
	&:disabled{
		background-color: #ccc;
		cursor: default;
	}
`

export default buttonStyles