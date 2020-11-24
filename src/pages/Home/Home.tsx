import React from 'react'
import Banner from './Banner'
import Gallery from './Gallery'
import Carousel from './Сarousel'

function HomePage() {
	return (
		<>
			<Carousel/>
			<Banner/>
			<Gallery/>
		</>
	)
}

export default React.memo(HomePage)
