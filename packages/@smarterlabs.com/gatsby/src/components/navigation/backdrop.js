import React from 'react'
import { css } from '@emotion/core'
import { primaryColor } from '../../config/colors'
import {
	zIndex,
	animationDuration,
} from './config'
import closeImg from '../../img/close.svg'

export default function NavBackdrop({ open, toggleNav }) {
	return (
		<>
			<div
				css={[styles.backdrop, open && styles.activeBackdrop]}
				onMouseEnter={() => toggleNav(false)}
				onClick={() => toggleNav(false)}
			/>
			<button onClick={toggleNav} css={[styles.button, open && styles.openButton]}>
				<img src={closeImg} css={styles.close} />
			</button>
		</>
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
	button: css`
		background: none;
		outline: none;
		border: 0;
		margin: 0;
		position: fixed;
		left: -500px;
		top: 305px;
		z-index: ${zIndex + 1};
		cursor: pointer;
		transition: transform .3s;
	`,
	openButton: css`
		transform: translate(870px, 0);
	`,
	close: css`
		width: 40px;
	`,
}
