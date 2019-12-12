import React, { useState, useEffect, useRef } from 'react'
import { css } from '@emotion/core'
import InView from './in-view'
import Placeholder from './placeholder'

const resizeEvents = []
let eventListener = false

export default function ResponsiveImage({
	ratio,
	width,
	height,
	children,
}){
	const [{w, h}, setDims] = useState({ w: 0, h: 0 })
	const containerEl = useRef(null)

	function resize() {
		if (!containerEl) return
		const {
			clientWidth,
			clientHeight,
		} = containerEl.current
		if (clientWidth > w) {
			setDims({ w: clientWidth, h: clientHeight })
		}
	}

	useEffect(() => {
		if (!eventListener) {
			eventListener = true
			window.addEventListener(`resize`, () => {
				for (let i = resizeEvents.length; i--;) {
					resizeEvents[i]()
				}
			})
		}
		resizeEvents.push(resize)
		setTimeout(resize, 1)

		return () => {
			resizeEvents.splice(resizeEvents.indexOf(resize), 1)
		}
	}, [])

	return (
		<InView once>
			{inView => {
				return (
					<div
						style={{ width }}
						css={styles.container}
						ref={containerEl}
					>
						<Placeholder ratio={ratio || [width, height]}>
							{!!w && inView && children(w, h)}
						</Placeholder>
					</div>
				)
			}}
		</InView>
	)
}

const styles = {
	container: css`
		max-width: 100%;
	`,
}
