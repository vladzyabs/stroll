import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'
import 'swiper/swiper.scss'
import { Container, Title } from '../../components/common'
import './styles.scss'
import { getReviews } from '../../store/homePage'
import { AppRootStateType } from '../../store/rootReducer'
import { ReviewsType } from '../../store/homePage/types'

SwiperCore.use([Pagination])

function ReviewsBlock() {
	const dispatch = useDispatch()
	const reviews = useSelector<AppRootStateType, ReviewsType[]>(state => state.home.reviews)

	React.useEffect(() => {
		dispatch(getReviews())
	}, [dispatch])

	return (
		<section className={'reviews'}>
			<Container>

				<div className={'reviews__title'}>
					<Title type={'primary'} supTitle={'Testimonials'} title={'Feedback From Our Customers'}/>
				</div>

				<Swiper
					id={'reviews-slider'}
					className={'reviews__slider'}
					slidesPerView={3}
					spaceBetween={20}
					pagination={{ clickable: true }}
				>

					{
						reviews.map(r => <SwiperSlide key={r.id}>
							<ReviewsCard
								id={r.id}
								text={r.text}
								user={r.user}
							/>
						</SwiperSlide>)
					}
					{/*<SwiperSlide><ReviewsCard/></SwiperSlide>*/}
					{/*<SwiperSlide><ReviewsCard/></SwiperSlide>*/}
					{/*<SwiperSlide><ReviewsCard/></SwiperSlide>*/}
					{/*<SwiperSlide><ReviewsCard/></SwiperSlide>*/}

				</Swiper>
			</Container>
		</section>
	)
}

type ReviewsCardPropsType = ReviewsType

function ReviewsCard(props: ReviewsCardPropsType) {
	return (
		<div className={'reviews__card'}>
			<blockquote>
				<div className={'reviews__card-icon'}>
					<FontAwesomeIcon icon={faQuoteLeft}/>
				</div>
				<p>
					{
						props.text
					}
				</p>
			</blockquote>
			<div className={'reviews__card-user'}>
				<div className={'reviews__card-pic'}>
					<img src={props.user.img} alt={props.user.name}/>
				</div>
				<div className={'reviews__card-user-inf'}>
					<h3>{props.user.name}</h3>
					<p>{props.user.position}</p>
				</div>
			</div>
		</div>
	)
}

export default React.memo(ReviewsBlock)
