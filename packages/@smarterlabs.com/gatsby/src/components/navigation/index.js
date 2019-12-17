import React, { useState } from 'react'
import Drawer from './drawer'
import Backdrop from './backdrop'
import Bar from './bar'
import { navOpenTimeout } from './config'

export default function Navigation() {
	const [open, setOpen] = useState(false)
	const [animating, setAnimating] = useState(false)

	function toggleNav(val, respectTimeout){
		if (respectTimeout && animating) return
		if(val === undefined) val = !open
		setAnimating(true)
		setTimeout(() => setAnimating(false), navOpenTimeout)
		setOpen(val)
	}

	return (
		<nav>
			<Backdrop open={open} toggleNav={toggleNav} />
			<Drawer open={open} />
			<Bar open={open} toggleNav={toggleNav} />
		</nav>
	)
}