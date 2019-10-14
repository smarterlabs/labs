import React, { useState } from 'react'
import { css } from '@emotion/core'
import Carousel from '@brainhubeu/react-carousel'
import Right from '@material-ui/icons/ChevronRight'
import Left from '@material-ui/icons/ChevronLeft'
import '@brainhubeu/react-carousel/lib/style.css'
import Placeholder from './placeholder'

export default function CarouselComp({ children, ratio = [1000, 400]}){
	const [onSlide, setOnSlide] = useState(0)

	const nextSlide = () => {
		setOnSlide(onSlide + 1)
	}
	const previousSlide = () => {
		setOnSlide(onSlide - 1)
	}
	const goToSlide = n => {
		const slideTotal = getSlides().length
		const moduloItem = calculateButtonValue() % slideTotal
		setOnSlide(onSlide - (moduloItem - n))
	}
	const calculateButtonValue = () => {
		const slideTotal = getSlides().length
		return onSlide >= 0
			? onSlide
			: onSlide + slideTotal * Math.ceil(Math.abs(onSlide / slideTotal))
	}
	const getSlides = () => {
		return Array.isArray(children) ? children : [children]
	}

	const slides = getSlides()
	const slideTotal = slides.length
	return (
		<Placeholder ratio={ratio}>
			<Carousel
				infinite
				value={onSlide}
				onChange={onSlide => setOnSlide(onSlide)}
				slides={slides}
			/>
			{slideTotal > 1 && <>
				<button
					onClick={previousSlide}
					css={[styles.button, styles.left]}
				>
					<span>left</span>
					<Left css={styles.icon} />
				</button>
				<button
					onClick={nextSlide}
					css={[styles.button, styles.right]}
				>
					<span>right</span>
					<Right css={styles.icon} />
				</button>
				<div css={styles.bottomControls}>
					{(() => {
						const buttons = []
						let onSlide = calculateButtonValue()
						while (onSlide > slideTotal - 1) {
							onSlide -= slideTotal
						}
						for (let i = 0; i < slideTotal; i++) {
							buttons.push(
								<button
									type='button'
									css={[
										styles.button,
										styles.bottomButton,
										onSlide === i &&
										styles.bottomButtonActive,
									]}
									onClick={() => goToSlide(i)}
									key={`slideControl${i}`}
								>
									<span>Slide {i}</span>
								</button>
							)
						}
						return buttons
					})()}
				</div>
			</>}
		</Placeholder>
	)
}

const circleSize = 14
const arrowSize = 40

const styles = {
	bottomControls: css`
		margin-bottom: 10px;
		display: none;
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		@media(min-width: 800px){
			display: block;
		}
	`,
	button: css`
		appearance: none;
		border: 0;
		background: transparent;
		outline: none;
		cursor: pointer;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		overflow: hidden;
		span{
			position: absolute;
			color: transparent;
			left: -1000px;
		}
		:hover{
			opacity: .5;
		}
	`,
	left: css`
		left: 0;
	`,
	right: css`
		right: 0;
	`,
	bottomButton: css`
		padding: 6px 5px;
		position: relative;
		overflow: hidden;
		span: {
			position: absolute;
		}
		:before{
			display: block;
			content: "";
			background: #999;
			width: ${circleSize}px;
			height: ${circleSize}px;
			border-radius: 100%;
		}
	`,
	bottomButtonActive: css`
		cursor: default;
		:before{
			background-color: #333;
		}
		:hover{
			opacity: 1;
		}
	`,
	icon: css`
		width: ${arrowSize}px !important;
		height: ${arrowSize}px !important;
		fill: #333 !important;
	`,
}
