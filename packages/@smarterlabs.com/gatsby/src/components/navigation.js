import React, { useState } from 'react'
import { css } from '@emotion/core'
import Link from 'gatsby-link'
import { primaryColor } from '../config/colors'

export default function Header(){
	const [open, setOpen] = useState(false)

	function onHamburgerClick(e){
		e.preventDefault()
		setOpen(!open)
	}

	return (
		<nav>
			<div css={styles.bar}>
				<div>Logo</div>
				<button
					onClick={onHamburgerClick}
					css={[styles.button, open && styles.activeButton]}
				>
					<span>{open ? `Close` : `Menu`}</span>
				</button>
			</div>
			<div css={[styles.drawer, open && styles.activeDrawer]}>
				<ul>
					<li>
						<Link to='/design'>Design</Link>
					</li>
					<li>
						<Link to='/development'>Web & App Development</Link>
					</li>
					<li>
						<Link to='/solutions'>Solutions</Link>
					</li>
					<li>
						<Link to='/consulting'>Consulting</Link>
					</li>
					<li>
						<Link to='/work'>Work</Link>
					</li>
					<li>
						<Link to='/about-us'>About Us</Link>
					</li>
					<li>
						<Link to='/contact'>Contact</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export const navBarWidth = 60
const drawerWidth = 200

const styles = {
	bar: css`
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		width: ${navBarWidth}px;
		box-shadow: 0 0 15px rgba(0, 0, 0, .2);
		background: #fff;
		z-index: 3;
	`,
	button: css`
		position: relative;
		text-transform: uppercase;
		padding: 0;
		width: 50px;
		height: 50px;
		margin-top: 30px;
		margin-left: 4px;
		color: ${primaryColor};
		border: 0;
		outline: 0;
		background: transparent;
		cursor: pointer;
		span{
			font-size: 16px;
			position: relative;
			display: block;
			transform: translate(0, 3px) scale(1);
		}
		:before, :after{
			content: '';
			display: block;
			background: ${primaryColor};
			height: 2px;
			position: absolute;
			top: 0;
			left: 2px;
			right: 2px;
			transform: rotate(0) translate(0, 13px) scale(1);
		}
		span, :before, :after{
			transition: transform .3s;
		}
	`,
	activeButton: css`
		:before{
			transform: rotate(40deg) translate(10px, 12px) scale(.8);
		}
		:after{
			transform: rotate(-40deg) translate(-10px, 12px) scale(.8);
		}
		span{
			transform: translate(0, 16px) scale(.75);
		}
	`,
	drawer: css`
		width: ${drawerWidth}px;
		transform: translate(-${drawerWidth}px, 0);
		transition: transform .3s;
	`,
	activeDrawer: css`
		transform: translate(0, 0);
	`,
}
