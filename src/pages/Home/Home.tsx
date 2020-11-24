import React from 'react'
import Banner from './Banner'
import Gallery from './Gallery'
import Carousel from './Сarousel'
import SubscriptionForm from './SubscriptionForm'
import BookingForm from './BookingForm'
import VideoSub from './VideoSub'
import VideoBlock from './VideoBlock'

function HomePage() {
	return (
		<>
			<Carousel/>
			<Banner/>
			<Gallery/>
			<VideoBlock/>
			<VideoSub/>
			<BookingForm/>
			<SubscriptionForm/>
		</>
	)
}

export default React.memo(HomePage)
