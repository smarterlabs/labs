import React from 'react'
import { css } from '@emotion/core'
import { secondaryColor } from '../../config/colors'
import { secondaryFont } from '../../config/fonts'
import {
	drawerWidth,
	animationDuration,
} from './config'

export default function NavButton({ open, toggleNav }) {
	return (
		<button
			onClick={() => toggleNav()}
			css={[styles.button, open && styles.activeButton]}
		>
			<span>{open ? `Close` : `Menu`}</span>
		</button>
	)
}

const styles = {
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
