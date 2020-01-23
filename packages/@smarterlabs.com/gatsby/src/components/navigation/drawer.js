import React, { useState, useRef } from 'react'
import { css, keyframes } from '@emotion/core'
import Link from 'gatsby-link'
// import Tagline from '../tagline'
import Circle from './circle'
import Links from './links'
import Social from './social'
import ContactInfo from './contact-info'
import Logo from '../logo'
import { drawerWidth, zIndex, animationDuration } from './config'
import { gradient } from '../../config/colors'

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
				{/* <Tagline css={styles.tagline} /> */}
				<Link to='/'>
					<Logo color='#fff' />
				</Link>
				<Links />
				<div css={styles.footer}>
					<Social />
					<ContactInfo />
				</div>
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

const drawerPadding = 25

const styles = {
	// tagline: css`
	// 	font-size: 1.3em;
	// `,
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
		background-image: ${gradient};
		padding: ${drawerPadding}px;
		position: fixed;
		top: 0;
		bottom: 0;
		/* left: 0; */
		z-index: ${zIndex + 2};
		box-shadow: 0 0 15px rgba(0, 0, 0, .5);
		opacity: 0;
		overflow: hidden;
	`,
	activeDrawer: css`
		transform: translate(0, 0);
		opacity: 1;
	`,
	footer: css`
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		padding: ${drawerPadding}px;
	`,
}
