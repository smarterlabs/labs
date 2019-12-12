import { css } from '@emotion/core'
import {
	primaryColor,
	primaryActiveColor,
} from 'config/colors'

export default css`
	color: ${primaryColor};
	text-decoration: none;
	&:focus, &:hover, &:active{
		text-decoration: underline;
		color: ${primaryActiveColor};
	}
`
