import React from 'react'
import { css } from '@emotion/core'
import { useStaticQuery, graphql } from 'gatsby'
import Link from 'gatsby-link'
import { Helmet } from 'react-helmet'
import Navigation from '../navigation'
import { navBarWidth } from '../navigation/config'
import {
	white,
	primaryColor,
	primaryActiveColor,
} from '../../config/colors'
import Footer from '../footer'
import Logo from '../logo'
import {
	primaryFont,
	secondaryFont,
} from '../../config/fonts'
import './global.css'
import 'typeface-dm-serif-display'
import 'typeface-roboto'

export default function Layout({
	title,
	description,
	children,
	logoColor = `#fff`,
}) {
	const { settings } = useStaticQuery(query)
	return (
		<>
			<Helmet>
				<html lang='en' />
				<title>{title ? `${title} | ${settings.title}` : settings.title}</title>
				<meta name='description' content={description || settings.title} />
				<meta property='og:title' content={title} />
				<meta property='og:site_name' content={settings.title} />
				{[32, 57, 76, 96, 128, 192, 228].map(size => (
					<link key={`icon${size}`} rel="icon" href={settings[`ico${size}`].asset.fixed.src} sizes={`${size}x${size}`} />
				))}
			</Helmet>
			<div css={styles.layout}>
				<Navigation />
				<Link to='/' css={styles.logo}>
					<Logo color={logoColor} />
				</Link>
				<main>{children}</main>
				<Footer />
			</div>
		</>
	)
}

const styles = {
	logo: css`
		position: absolute;
		width: 300px;
		top: 60px;
		left: 90px;
		z-index: 1;
		display: none;
		@media(min-width: 1200px){
			display: block;
		}
	`,
	layout: css`
		padding-left: ${navBarWidth}px;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		font-family: ${secondaryFont};
		a{
			color: ${primaryColor};
			text-decoration: none;
			&:focus, &:hover, &:active{
				text-decoration: underline;
				color: ${primaryActiveColor};
			}
		}
		p{
			line-height: 28px;
		}
		h1, h2, h3{
			font-family: ${primaryFont};
		}
		li{
			line-height: 1.3em;
			margin-bottom: 4px;
		}
		& ::selection{
			color: ${white};
			background-color: ${primaryColor};
		}
	`,
}

const query = graphql`
	query HeaderQuery {
		settings: sanitySiteSettings{
			title
			description
			ico32: icon {
				asset{
					fixed(height: 32, width: 32) {
						src
					}
				}
			}
			ico57: icon {
				asset{
					fixed(height: 57, width: 57) {
						src
					}
				}
			}
			ico76: icon {
				asset{
					fixed(height: 76, width: 76) {
						src
					}
				}
			}
			ico96: icon {
				asset{
					fixed(height: 96, width: 96) {
						src
					}
				}
			}
			ico128: icon {
				asset{
					fixed(height: 128, width: 128) {
						src
					}
				}
			}
			ico192: icon {
				asset{
					fixed(height: 192, width: 192) {
						src
					}
				}
			}
			ico228: icon {
				asset{
					fixed(height: 228, width: 228) {
						src
					}
				}
			}
		}
	}
`