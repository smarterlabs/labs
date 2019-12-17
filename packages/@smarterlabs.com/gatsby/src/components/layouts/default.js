import React from 'react'
import { css } from '@emotion/core'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Navigation from '../navigation'
import { navBarWidth } from '../navigation/config'
import {
	white,
	primaryColor,
	primaryActiveColor,
} from 'config/colors'
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
}) {

	const data = useStaticQuery(graphql`
		query HeaderQuery {
			sanitySiteSettings{
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
  `)
	console.log(data)
	const {
		sanitySiteSettings: {
			title: siteTitle,
			description: siteDescription,
		},
	} = data
	return (
		<>
			<Helmet>
				<html lang='en' />
				<title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
				<meta name='description' content={description || siteDescription} />
				<meta property='og:title' content={title} />
				<meta property='og:site_name' content={siteTitle} />

				<link rel="icon" href={data.sanitySiteSettings.ico32.asset.fixed.src} sizes="32x32" />
				<link rel="icon" href={data.sanitySiteSettings.ico57.asset.fixed.src} sizes="57x57" />
				<link rel="icon" href={data.sanitySiteSettings.ico76.asset.fixed.src} sizes="76x76" />
				<link rel="icon" href={data.sanitySiteSettings.ico96.asset.fixed.src} sizes="96x96" />
				<link rel="icon" href={data.sanitySiteSettings.ico128.asset.fixed.src} sizes="128x128" />
				<link rel="icon" href={data.sanitySiteSettings.ico192.asset.fixed.src} sizes="192x192" />
				<link rel="icon" href={data.sanitySiteSettings.ico228.asset.fixed.src} sizes="228x228" />
			</Helmet>
			<div css={styles.layout}>
				<Navigation />
				<div css={styles.content}>
					<main>{children}</main>
				</div>
			</div>
		</>
	)
}

const styles = {
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
	content: css`
		margin: 0 auto;
		padding: 0 30px;
		max-width: 960px;
		width: 100%;
		flex: 1 0 auto;
	`,
}
