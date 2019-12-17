import React from 'react'
import { css } from '@emotion/core'
import { white } from 'config/colors'

export default function Modal(props) {
	return (
		<div
			css={styles.bg}
			style={{ display: props.open ? `block` : `none` }}
			onClick={props.onClose}
		>
			<div css={styles.dialog} onClick={stopPropagation}>
				<div className='close' css={styles.close} onClick={props.onClose}>
					×
				</div>
				<div css={styles.content}>
					{props.children}
				</div>
			</div>
			{props.open && (
				<style dangerouslySetInnerHTML={{ __html: `body{overflow:hidden}` }} />
			)}
		</div>
	)
}


function stopPropagation(e){
	e.stopPropagation()
}

const modalPadding = 15
const closeSize = 30
const maxWidth = 900

const styles = {
	bg: css`
		background: rgba(0, 0, 0, .4);
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		z-index: 999;
		overflow-y: auto;
	`,
	dialog: css`
		background: ${white};
		position: absolute;
		min-height: 100%;
		width: 100%;
		padding: ${modalPadding}px;
		@media(min-width: ${maxWidth}px){
			top: 30px;
			left: 50%;
			transform: translateX(-50%);
			margin-bottom: 30px;
			max-width: ${maxWidth}px;
			min-height: 0;
		}
	`,
	close: css`
		cursor: pointer;
		position: absolute;
		font-size: ${closeSize}px;
		line-height: ${closeSize}px;
		top: ${modalPadding}px;
		right: ${modalPadding}px;
	`,
	content: css`
		margin-top: ${modalPadding * 2}px;
	`,
}
