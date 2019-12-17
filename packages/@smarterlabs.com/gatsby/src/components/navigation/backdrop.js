import React from 'react'
import { css } from '@emotion/core'
import { primaryColor } from '../../config/colors'
import {
	zIndex,
	animationDuration,
} from './config'

export default function NavBackdrop({ open, toggleNav }) {
	return (
		<div
			css={[styles.backdrop, open && styles.activeBackdrop]}
			onMouseEnter={() => toggleNav(false)}
			onClick={() => toggleNav(false)}
		/>
	)
}

const styles = {
	backdrop: css`
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		visibility: hidden;
		opacity: 0;
		z-index: ${zIndex};
		background: ${primaryColor};
		transition: visibility ${animationDuration}, opacity ${animationDuration};
	`,
	activeBackdrop: css`
		visibility: visible;
		opacity: 1;
	`,
}
