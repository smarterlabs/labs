import React, { useState, useEffect } from 'react'

export default function InView({
	offset = `0px`,
	tag,
	children,
	once,
	...props
}){
	const [inView, setInView] = useState(false)

	let observer
	let el

	function onChange([{ isIntersecting, boundingClientRect }]) {
		const { y } = boundingClientRect
		if (y > 0) {
			if (isIntersecting) {
				if (once) {
					unobserve()
				}
				setInView(true)
			}
			else {
				setInView(false)
			}
		}
	}

	function unobserve() {
		if (global.IntersectionObserver && el) {
			observer.unobserve(el)
		}
	}

	useEffect(() => {
		if (global.IntersectionObserver) {
			observer = new global.IntersectionObserver(onChange, {
				rootMargin: offset,
			})
			observer.observe(el)
		}
		else {
			setInView(true)
		}

		return unobserve
	}, [])

	return React.createElement(
		tag || `div`,
		{
			ref: div => el = div,
			...props,
		},
		children(inView),
	)
}
