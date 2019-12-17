import React, { useState, useEffect } from 'react'
import { css } from '@emotion/core'
import Carousel from '@brainhubeu/react-carousel'
import Right from '@material-ui/icons/ChevronRight'
import Left from '@material-ui/icons/ChevronLeft'
import '@brainhubeu/react-carousel/lib/style.css'
import Placeholder from './placeholder'

export default function CarouselComp({
	ratio = [1000, 400],
	breakpoints = [
		[0, 3],
		[400, 5],
		[700, 7],
		[1200, 9],
	],
	slides,
}){
	const [onSlide, setOnSlide] = useState(0)
	const [thumbnailsPerPage, setThumbnailsPerPage] = useState(breakpoints[0][1])

	const slideTotal = slides.length
	const slideValue = calculateButtonValue() % slideTotal
	const thumbnailsMax = slideTotal - thumbnailsPerPage
	let thumbnailsPage = slideValue - Math.floor(thumbnailsPerPage / 2)
	if (thumbnailsPage < 0) {
		thumbnailsPage = 0
	}
	else if (thumbnailsPage > thumbnailsMax) {
		thumbnailsPage = thumbnailsMax
	}

	function calculateButtonValue(){
		return onSlide >= 0
			? onSlide
			: onSlide + slideTotal * Math.ceil(Math.abs(onSlide / slideTotal))
	}
	function calculateBreakpoint(){
		const w = window.innerWidth
		let thumbnailsPerPage
		breakpoints.forEach(([breakpoint, n]) => {
			if (w >= breakpoint) {
				thumbnailsPerPage = n
			}
		})
		setThumbnailsPerPage(thumbnailsPerPage)
	}

	useEffect(() => {
		calculateBreakpoint()
		window.addEventListener(`resize`, calculateBreakpoint)

		return () => {
			window.removeEventListener(`resize`, calculateBreakpoint)
		}
	}, [])

	return <>
		<Placeholder ratio={ratio}>
			<Carousel
				infinite
				value={onSlide}
				onChange={setOnSlide}
				slides={slides.map((slide, index) => (
					<Placeholder key={`slide${index}`} ratio={ratio}>
						{slide}
					</Placeholder>

				))}
				css={styles.carousel}
			/>
			{slideTotal > 1 && <>
				<button
					onClick={() => setOnSlide(onSlide - 1)}
					css={[styles.button, styles.left]}
				>
					<Left css={styles.icon} />
				</button>
				<button
					onClick={() => setOnSlide(onSlide + 1)}
					css={[styles.button, styles.right]}
				>
					<Right css={styles.icon} />
				</button>
			</>}
		</Placeholder>
		<div css={styles.thumbnails}>
			<Carousel
				value={thumbnailsPage}
				slidesPerPage={thumbnailsPerPage}
				slides={slides.map((slide, index) => (
					<Placeholder
						role='button'
						key={`thumbnail${index}`}
						ratio={ratio}
						css={[
							styles.thumbnail,
							index === slideValue && styles.activeThumbnail,
						]}
					>
						<button
							css={[styles.button, styles.thumbnailButton]}
							onClick={() => setOnSlide(onSlide - (slideValue - index))}
						>
							{slide}
						</button>
					</Placeholder>
				))}
			/>
		</div>
	</>

}

const arrowSize = 40

const styles = {
	button: css`
		appearance: none;
		border: 0;
		background: transparent;
		outline: none;
		cursor: pointer;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		:focus, :hover{
			opacity: .5;
		}
	`,
	left: css`
		left: 0;
	`,
	right: css`
		right: 0;
	`,
	icon: css`
		width: ${arrowSize}px !important;
		height: ${arrowSize}px !important;
		fill: #333 !important;
	`,
	thumbnails: css`
		margin-top: 30px;
	`,
	thumbnail: css`
		border: 1px solid transparent;
	`,
	thumbnailButton: css`
		width: 100%;
		height: 100%;
	`,
	activeThumbnail: css`
		border-color: #333;
	`,
}
