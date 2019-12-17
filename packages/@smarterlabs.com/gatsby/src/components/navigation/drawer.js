import React, { useState, useRef } from 'react'
import { css, keyframes } from '@emotion/core'
import Link from 'gatsby-link'
import Tagline from '../tagline'
import Circle from './circle'
import { primaryColor } from '../../config/colors'
import { drawerWidth, zIndex, animationDuration } from './config'

export default function NavDrawer({ open }) {
	const [clickCoords, setClickCoords] = useState(false)
	const drawerEl = useRef(null)

	function clickDrawer(e){
		if(!drawerEl.current) return
		const rect = drawerEl.current.getBoundingClientRect()
		const x = e.clientX - rect.left
		const y = e.clientY - rect.top
		setClickCoords(false)
		setTimeout(() => setClickCoords({ x, y }), 1)
	}

	return (
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
}
