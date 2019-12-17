import React from 'react'
import { css } from '@emotion/core'
import Responsive from './responsive-image'

export default function NetlifyImage({
	resize = `fit`,
	src,
	alt,
	...props
}) {
	return (
		<Responsive {...props}>
			{(w, h) => (
				<img
					src={`${src}?nf_resize=${resize}&w=${w}&h=${h}`}
					css={styles.img}
					alt={alt}
				/>
			)}
		</Responsive>
	)
}

const styles = {
	img: css`
		width: 100%;
	`,
}
