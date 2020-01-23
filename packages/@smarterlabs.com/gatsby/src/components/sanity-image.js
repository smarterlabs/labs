import React from 'react'
import { css } from '@emotion/core'
import imageUrlBuilder from '@sanity/image-url'
import { api } from '@smarterlabs.com/sanity/sanity.json'
import Responsive from './responsive-image'

const builder = imageUrlBuilder(api)

export default function SanityImage({
	src = {},
	alt,
	...props
}) {
	const {
		caption,
		width,
		height,
		asset: {
			_ref,
			_id,
		} = {},
	} = src
	if(width) props.width = width
	if(height) props.height = height
	return (
		<Responsive {...props}>
			{(w) => {
				let finalSrc = builder.image(_ref || _id)
				if(w) finalSrc = finalSrc.width(w)
				// if(h) finalSrc = finalSrc.height(h)
				finalSrc = finalSrc.url()
				return (
					<img
						src={finalSrc}
						css={styles.img}
						alt={alt || caption}
					/>
				)
			}}
		</Responsive>
	)
}

const styles = {
	img: css`
		width: 100%;
	`,
}
