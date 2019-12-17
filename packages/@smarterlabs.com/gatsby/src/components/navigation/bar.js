import React from 'react'
import { css } from '@emotion/core'
import Logo from './logo'
import Button from './button'
import {
	navBarWidth,
	zIndex,
} from './config'

export default function Navigation({ open, toggleNav }) {
	return (
		<div css={styles.bar} onMouseEnter={() => toggleNav(true, true)}>
			<Logo />
			<Button open={open} toggleNav={toggleNav} />
		</div>
	)
}

const styles = {
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
}
