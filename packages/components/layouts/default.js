import React from 'react'
import { css } from '@emotion/core'
import { Helmet } from 'react-helmet'
import Header from '../header'
import Footer from '../footer'
import {
	white,
	primaryColor,
} from 'config/colors'
import {
	primaryFont,
	secondaryFont,
} from 'config/fonts'
import linkMixin from '../mixins/link'
import { siteSettings } from '@app-boilerplate/sanity-data'
import './global.css'
import 'typeface-open-sans'
import 'typeface-oswald'

const {
	title: siteTitle,
	description: siteDescription,
} = siteSettings

export default function Layout({
	title,
	description,
	children,
}) {
	return (
		<>
			<Helmet>
				<html lang='en' />
				<title>{title ? `${title} | ${siteTitle || `example.com`}` : siteTitle}</title>
				<meta name='description' content={description || siteDescription} />
				<meta property='og:title' content={title} />
				<meta property='og:site_name' content={siteTitle} />
			</Helmet>
			<div css={styles.layout}>
				<Header />
				<div css={styles.content}>
					<main>{children}</main>
				</div>
				<Footer />
			</div>
		</>
	)
}

const styles = {
	layout: css`
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		font-family: ${secondaryFont};
		a{
			${linkMixin};
		}
		p{
			line-height: 28px;
		}
		h1, h2, h3{
			font-family: ${primaryFont};
			text-transform: uppercase;
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
