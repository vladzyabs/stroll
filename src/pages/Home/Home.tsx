import React from 'react'
import Banner from './Banner'
import Gallery from './Gallery'
import Carousel from './Сarousel'
import SubscriptionForm from './SubscriptionForm'

function HomePage() {
	return (
		<>
			<Carousel/>
			<Banner/>
			<Gallery/>
			<SubscriptionForm/>
		</>
	)
}

export default React.memo(HomePage)
