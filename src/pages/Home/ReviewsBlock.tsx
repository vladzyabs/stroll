import React from 'react'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'
import 'swiper/swiper.scss'
import { Container, Title } from '../../components/common'
import './styles.scss'

SwiperCore.use([Pagination])

function ReviewsBlock() {
	return (
		<section className={'reviews'}>
			<Container>

				<div className={'reviews__title'}>
					<Title type={'primary'} supTitle={'Testimonials'} title={'Feedback From Our Customers'}/>
				</div>

				<Swiper
					id={'reviews-slider'}
					slidesPerView={3}
					pagination={{ clickable: true }}
				>

					<SwiperSlide><ReviewsCard/></SwiperSlide>
					<SwiperSlide><ReviewsCard/></SwiperSlide>
					<SwiperSlide><ReviewsCard/></SwiperSlide>
					<SwiperSlide><ReviewsCard/></SwiperSlide>

				</Swiper>
			</Container>
		</section>
	)
}

function ReviewsCard() {
	return (
		<div className={'reviews__card'}>
			<blockquote>
				<div className={'reviews__card-icon'}>
					<FontAwesomeIcon icon={faQuoteLeft}/>
				</div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua.
				</p>
			</blockquote>
			<div className={'reviews__card-user'}>
				<div>
					<img src="" alt=""/>
				</div>
				<div>
					<h3>Theo Hall</h3>
					<p>SEO Expert</p>
				</div>
			</div>
		</div>
	)
}

export default React.memo(ReviewsBlock)
