import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

export default function Footer(){
	return (
		<footer css={styles.footerStyles}>
			<ul>
				<li><Link to='/privacy-policy'>Privacy Policy</Link></li>
				<li><a href='/email-templates/cms-invitation'>Email Template</a></li>
				<li><a href='/admin/'>CMS</a></li>
			</ul>
		</footer>
	)
}

const styles = {
	footerStyles: css`
		ul{
			list-style-type: none;
			padding: 30px;
			margin: 0;
		}
		li{
			text-align: center;
		}
		a{
			padding: 0 10px;
		}
		@media(min-width: 800px){
			li{
				display: inline-block;
				text-align: left;
			}
			ul > li{
				:first-of-type > a{
					padding-left: 0;
				}
				:last-of-type > a{
					padding-right: 0;
				}
			}
		}
	`,
}
