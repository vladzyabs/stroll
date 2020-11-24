import React from 'react'
import Banner from './Banner'
import Gallery from './Gallery'
import Carousel from './Сarousel'
import SubscriptionForm from './SubscriptionForm'
import BookingForm from './BookingForm'

function HomePage() {
	return (
		<>
			<Carousel/>
			<Banner/>
			<Gallery/>
			<BookingForm/>
			<SubscriptionForm/>
		</>
	)
}

export default React.memo(HomePage)
