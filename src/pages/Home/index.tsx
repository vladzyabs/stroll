import React from 'react'
import Banner from './Banner'
import Gallery from './Gallery'
import MainBlock from './MainBlock'
import SubscriptionForm from './SubscriptionForm'
import BookingForm from './BookingForm'
import VideoSub from './VideoSub'
import VideoBlock from './VideoBlock'
import ReviewsBlock from './ReviewsBlock'

function HomePage() {
	return (
		<>
			<MainBlock/>
			<Banner/>
			<Gallery/>
			<VideoBlock/>
			<VideoSub/>
			<BookingForm/>
			<SubscriptionForm/>
			<ReviewsBlock/>
		</>
	)
}

export default React.memo(HomePage)
