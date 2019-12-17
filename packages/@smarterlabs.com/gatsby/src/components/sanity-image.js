import React from 'react'
import { css } from '@emotion/core'
import imageUrlBuilder from '@sanity/image-url'
import { api } from '@smarterlabs.com/sanity/sanity.json'
import Responsive from './responsive-image'

const builder = imageUrlBuilder(api)

export default function NetlifyImage({
	src: {
		caption,
		width,
		height,
		asset: {
			_ref,
			_id,
		} = {},
	} = {},
	alt,
	...props
}) {
	if(width) props.width = width
	if(height) props.height = height
	return (
		<Responsive {...props}>
			{(w, h) => {
				const finalSrc = builder.image(_ref || _id)
					.width(w)
					.height(h)
					.url()
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
