import React from 'react'
import { css } from '@emotion/core'
import BlockContent from '@sanity/block-content-to-react'
import { secondaryColor, white } from '../config/colors'
import SanityImg from './sanity-image'

const serializers = {
	types: {
		block(props) {
			switch (props.node.style) {
				case `h1`:
					return <h1 css={styles.h1}>{props.children}</h1>

				case `h2`:
					return <h2 css={styles.h2}>{props.children}</h2>

				case `h3`:
					return <h3 css={styles.h3}>{props.children}</h3>

				case `h4`:
					return <h4 css={styles.h4}>{props.children}</h4>

				case `blockquote`:
					return <blockquote>{props.children}</blockquote>

				default:
					return <p>{props.children}</p>
			}
		},
		// widget(props){
		// 	switch (props.node.widgetType){
		// 		case `Contact Form`:
		// 			return <ContactForm />
		// 		case `Homepage Carousel`:
		// 			return <HomepageCarousel />
		// 	}
		// },
		captionedImage(arg){
			const { node } = arg
			return <SanityImg src={node} />
		},
	},
}


export default function SanityBlock({ body, ...props }){
	return (
		<BlockContent blocks={body} serializers={serializers} {...props} />
	)
}

const styles = {
	h1: css`
		color: ${white};
		font-size: 2.1em;
	`,
	h2: css`
		color: ${secondaryColor};
		font-style: italic;
		font-size: 2em;
	`,
	h3: css`
		color: ${white};
		font-size: 1.5em;
	`,
	h4: css`
		color: ${secondaryColor};
		font-size: 1.5em;
	`,
}
