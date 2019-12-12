import React from 'react'
import { Helmet } from 'react-helmet'
import { Box, Item } from 'react-html-email'

export default function EmailLayout({
	lang = `en`,
	width = `600`,
	align = `left`,
	vAlign = `top`,
	bgColor = `#fff`,
	title,
	cellPadding,
	cellSpacing,
	style,
	children,
}){
	return <>
		<Helmet>
			<html lang={lang} xmlns='http://www.w3.org/1999/xhtml' />
			<meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
			<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			<title>{title}</title>
			<body
				bgColor='#fff'
				width='100%'
				style={{
					width: `100%`,
					margin: 0,
					padding: 0,
					WebkitTextSizeAdjust: `100%`,
					MsTextSizeAdjust: `100%`,
				}}
			/>
			<style type='text/css'>{`
				html {
					height: 100%;
					box-sizing: border-box;
				}

				*, *:before, *:after {
					box-sizing: inherit;
				}

				body {
					position: relative;
					height: 100%;
					margin: 0;
					font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
					text-rendering: optimizeLegibility;
					font-size: 18px;
				}

				html, body {
					-webkit-tap-highlight-color: transparent;
					max-width: 100%;
				}

				img{
					max-width: 100%;
				}
			`}</style>
		</Helmet>
		<Box width='100%' height='100%' bgcolor={bgColor}>
			<Item align={align} valign={vAlign}>
				<Box
					width={width}
					align='center'
					cellPadding={cellPadding}
					cellSpacing={cellSpacing}
					style={style}
				>
					{children}
				</Box>
			</Item>
		</Box>
	</>
}
