import React from 'react'
import { css } from '@emotion/core'

// Maintains aspect ratio
export default function Placeholder({
	ratio,
	children,
	css,
	...otherProps
}) {
	const [w, h] = ratio
	return (
		<div
			css={[styles.outer, css]}
			style={{ paddingTop: `${(h / w) * 100}%` }}
			{...otherProps}
		>
			<div css={styles.inner}>
				{children}
			</div>
		</div>
	)
}

const styles = {
	outer: css`
		position: relative;
		width: 100%;
		overflow: hidden;
		:before{
			display: block;
			content: '';
			width: 100%;
		}
	`,
	inner: css`
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	`,
}
