import React from 'react'
import { css } from '@emotion/core'
import Logo from './logo'
import hamburger from '../../img/hamburger.svg'
import {
	navBarWidth,
	zIndex,
} from './config'

export default function Navigation({ open, toggleNav }) {
	return (
		<div css={styles.bar} onMouseEnter={() => toggleNav(true, true)}>
			<Logo />
			<button onClick={toggleNav} css={styles.button}>
				<img src={hamburger} css={[styles.burger, open && styles.openBurger]} />
			</button>
		</div>
	)
}

const burgerSize = 35

const styles = {
	burger: css`
		width: ${burgerSize}px;
		height: ${burgerSize}px;
		transform: rotate(0deg);
		transition: transform .3s;
	`,
	openBurger: css`
		transform: rotate(-90deg);
	`,
	bar: css`
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		width: ${navBarWidth}px;
		box-shadow: 0 0 15px rgba(0, 0, 0, .5);
		background: #fff;
		z-index: ${zIndex + 2};
	`,
	button: css`
		background: none;
		outline: none;
		border: 0;
		padding: 7px;
		margin: 0;
	`,
}
