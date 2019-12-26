import React from 'react'
import { css } from '@emotion/core'
import Logo from '../logo'
import { secondaryColor } from '../../config/colors'

export default function NavContactInfo() {
	return (
		<div css={styles.container}>
			<Logo css={styles.logo} color={secondaryColor} />
			<div>PO Box 365 | Evansville, IN 47711</div>
			<div>
				<a href='tel:1-812-555-6498'>812.555.6498</a>
			</div>

		</div>
	)
}

const styles = {
	container: css`
		color: #fff;
		font-size: .8em;
		a{
			color: ${secondaryColor};
			:hover{
				color: #fff;
			}
		}
		> div{
			margin-top: 10px;
		}
	`,
	logo: css`
		max-width: 150px;
	`,
}
