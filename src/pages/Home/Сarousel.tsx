import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'
import 'swiper/swiper.scss'
import classes from './styles.module.scss'
import slideImg1 from '../../assets/img/slider1.jpg'
import slideImg2 from '../../assets/img/slider2.jpg'
import slideImg3 from '../../assets/img/slider3.jpg'
import slideImg4 from '../../assets/img/slider4.jpg'
import { ButtonLink } from '../../components/common'

SwiperCore.use([Pagination])

const slides: SlidePropsType[] = [
	{
		supTitle: 'Mountain Holiday',
		title: 'Destination',
		description: 'Enjoy the Best Destinations with Our Travel Agency',
		link: '/#',
		img: slideImg1,
	},
	{
		supTitle: 'Mountain Holiday',
		title: 'Vacation',
		description: 'Enjoy the Best Destinations with Our Travel Agency',
		link: '/#',
		img: slideImg2,
	},
	{
		supTitle: 'Balloon Flights',
		title: 'Vacation',
		description: 'Let\'s Enjoy The Wonders of Nature',
		link: '/#',
		img: slideImg3,
	},
	{
		supTitle: 'Mountain Holiday',
		title: 'Destination',
		description: 'Let\'s Enjoy The Wonders of Nature',
		link: '/#',
		img: slideImg4,
	},
]

function Carousel() {
	return (
		<>
			<Swiper
				id={'main-slider'}
				tag={'section'}
				slidesPerView={1}
				className={classes.slider}
				pagination={{ clickable: true }}
			>

				{
					slides.map((sl, i) => <SwiperSlide key={i}>
						<Slide
							{...sl}
						/>
					</SwiperSlide>)
				}
			</Swiper>
		</>
	)
}

type SlidePropsType = {
	supTitle: string
	title: 'Destination' | 'Vacation'
	description: string
	link: string
	img: string
}

function Slide(props: SlidePropsType) {
	return (
		<div className={classes.slide}>
			<div className={classes.slideInformation}>
				<h6 className={classes.slideSupTitle}>{props.supTitle}</h6>
				{
					props.title === 'Vacation'
						? <h3 className={classes.slideTitle}>Enjoy your Dream <span>vacation</span></h3>
						: <h3 className={classes.slideTitle}>Enjoy your Travel <span>destinations</span></h3>
				}
				<p className={classes.slideDesc}>{props.description}</p>
				<div><ButtonLink href={'/#'}>Read More</ButtonLink></div>
			</div>
			<div className={classes.slideImg}>
				<img src={props.img} alt=""/>
			</div>
		</div>
	)
}

export default React.memo(Carousel)
