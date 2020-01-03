import React from 'react'
import { css } from '@emotion/core'
import { FaFacebook } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { primaryColor, secondaryColor } from '../../config/colors'

export default function NavSocial({ css, ...props }) {
	return (
		<ul css={[styles.container, css]} {...props}>
			<li>
				<a
					href='https://www.facebook.com/smarterlabsllc/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FaFacebook />
				</a>
			</li>
			<li>
				<a
					href='https://github.com/smarterlabs'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FaGithub />
				</a>
			</li>
		</ul>
	)
}

const styles = {
	container: css`
		list-style: none;
		padding: 0;
		margin: 0;
		font-size: 1.5em;
		li{
			display: inline-block;
			padding-left: 10px;
			:first-of-type{
				padding-left: 0;
			}
		}
		a{
			color: ${secondaryColor};
			:hover{
				color: ${primaryColor};
			}
		}
	`,
}
