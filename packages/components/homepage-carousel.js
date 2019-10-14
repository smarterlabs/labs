import React from 'react'
import Carousel from './carousel'

export default function HomepageCarousel(){
	return (
		<Carousel ratio={[1000, 400]}>
			<img src='https://placehold.it/1000x400/ccc/999/&text=slide1' alt='Slide 1' />
			<img src='https://placehold.it/1000x400/ccc/999/&text=slide2' alt='Slide 2' />
			<img src='https://placehold.it/1000x400/ccc/999/&text=slide3' alt='Slide 3' />
		</Carousel>
	)
}
