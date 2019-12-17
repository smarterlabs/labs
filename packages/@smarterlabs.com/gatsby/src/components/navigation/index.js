import React, { useState, useRef } from 'react'
import { css, keyframes } from '@emotion/core'
import Link from 'gatsby-link'
import Tagline from '../tagline'
import Logo from '../logo'
import Circle from './circle'
import { primaryColor, secondaryColor } from '../../config/colors'
import { secondaryFont } from '../../config/fonts'

export const navBarWidth = 60
const drawerWidth = 300
const logoSize = 200
const zIndex = 900
const animationDuration = `.3s`
const navOpenTimeout = 200

export default function Navigation() {
	const [open, setOpen] = useState(false)
	const [animating, setAnimating] = useState(false)
	const [clickCoords, setClickCoords] = useState(false)
	const drawerEl = useRef(null)

	function toggleNav(val, respectTimeout){
		if (respectTimeout && animating) return
		if(val === undefined) val = !open
		setAnimating(true)
		setTimeout(() => setAnimating(false), navOpenTimeout)
		setOpen(val)
	}

	function clickDrawer(e){
		if(!drawerEl.current) return
		const rect = drawerEl.current.getBoundingClientRect()
		const x = e.clientX - rect.left
		const y = e.clientY - rect.top
		setClickCoords(false)
		setTimeout(() => setClickCoords({ x, y }), 1)
	}

	return (
		<nav>
			<div
				css={[styles.backdrop, open && styles.activeBackdrop]}
				onMouseEnter={() => toggleNav(false)}
				onClick={() => toggleNav(false)}
			/>
			<div
				css={[styles.drawer, open && styles.activeDrawer]}
				onClick={clickDrawer}
				ref={drawerEl}
			>
				{clickCoords && (
					<div css={styles.circle} style={{top: clickCoords.y, left: clickCoords.x}}>
						<Circle />
					</div>
				)}
				<div css={styles.drawerContent}>
					<Tagline />
					<ul css={styles.links}>
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
			</div>
			<div css={styles.bar} onMouseEnter={() => toggleNav(true, true)}>
				<div css={styles.logoContainer}>
					<div css={styles.logo}>
						<Logo />
					</div>
				</div>
				<button
					onClick={() => toggleNav()}
					css={[styles.button, open && styles.activeButton]}
				>
					<span>{open ? `Close` : `Menu`}</span>
				</button>
			</div>
		</nav>
	)
}

const expand = keyframes`
	0% {
		transform: translate(-50%, -50%) scale(0);
		opacity: 1;
	}
	60%{
		opacity: 1;
	}
	100%{
		transform: translate(-50%, -50%) scale(3);
		opacity: 0;
	}
`

const styles = {
	circle: css`
		position: absolute;
		z-index: -1;
		animation: ${expand} 1s forwards linear;
	`,
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
	drawer: css`
		width: ${drawerWidth}px;
		transform: translate(-${drawerWidth}px, 0);
		transition: transform ${animationDuration}, opacity ${animationDuration};
		background-color: #362284;
		background-image: linear-gradient(19deg, #362284 0%, #00b78d 100%);
		padding: 25px;
		position: fixed;
		top: 0;
		bottom: 0;
		z-index: ${zIndex + 1};
		box-shadow: 0 0 15px rgba(0, 0, 0, .5);
		opacity: 0;
		overflow: hidden;
		a{
			color: #fff;
			display: block;
			:hover, :active{
				color: ${primaryColor};
				text-decoration: none;
			}
		}
		ul{
			padding: 0;
		}
		li{
			list-style-type: none;
		}
	`,
	activeDrawer: css`
		transform: translate(0, 0);
		opacity: 1;
	`,
	links: css`
		margin-top: 60px;
		li{
			margin-top: 10px;
		}
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
	logoContainer: css`
		height: ${logoSize}px;
		width: 30px;
		overflow: hidden;
		margin-left: 13px;
		margin-top: 20px;
	`,
	logo: css`
		transform: rotate(-90deg);
		width: ${logoSize}px;
		height: ${logoSize}px;
		img{
			display: block;
			width: 100%;
		}
	`,
	button: css`
		margin-top: 60px;
		position: relative;
		left: 1px;
		text-transform: uppercase;
		padding: 0;
		width: 50px;
		height: 50px;
		margin-left: 4px;
		color: #000;
		border: 0;
		outline: 0;
		background: transparent;
		cursor: pointer;
		transition: transform ${animationDuration};
		font-family: ${secondaryFont};
		span{
			font-size: 14px;
			font-weight: bold;
			position: relative;
			display: block;
			transform: translate(0, 3px) scale(1);
		}
		:before{
			visibility: hidden;
			transition: transform ${animationDuration}, visibility ${animationDuration}, background ${animationDuration};
		}
		:after{
			transition: transform ${animationDuration}, background ${animationDuration};
		}
		span{
			transition: transform ${animationDuration}, color ${animationDuration};
		}
		:before, :after{
			content: '';
			display: block;
			background: ${secondaryColor};
			height: 2px;
			position: absolute;
			top: 0;
			left: 3px;
			right: 3px;
			transform: rotate(0) translate(0, 13px) scale(1);
		}
	`,
	activeButton: css`
		transform: translate(${drawerWidth + 75}px, 0);
		:before, :after{
			background: #fff;
		}
		:before{
			visibility: visible;
			transform: rotate(45deg) translate(10px, 10px) scale(.8);
		}
		:after{
			transform: rotate(-45deg) translate(-10px, 10px) scale(.8);
		}
		span{
			transform: translate(0, 16px) scale(.7);
			color: ${secondaryColor};
		}
	`,
}
