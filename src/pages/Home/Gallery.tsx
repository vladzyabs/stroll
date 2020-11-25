import React from 'react'
import g1 from '../../assets/img/g1.jpg'
import g2 from '../../assets/img/g2.jpg'
import g3 from '../../assets/img/g3.jpg'
import g4 from '../../assets/img/g4.jpg'
import g5 from '../../assets/img/g5.jpg'
import g6 from '../../assets/img/g6.jpg'
import { Container, Title } from '../../components/common'
import './styles.scss'

function Gallery() {
	return (
		<section className={'gallery'}>
			<Container>
				<div className={'gallery__title'}>
					<Title type={'primary'} supTitle={'Hot Tours'} title={'Popular packages'}/>
				</div>
				<div className={'gallery__content'}>

					<GalleryCard img={g1} title={'Paris'} link={'/#'} subTitle={{ days: 3, nights: 4, price: 750 }}/>
					<GalleryCard img={g2} title={'Bankok'} link={'/#'} subTitle={{ days: 2, nights: 3, price: 650 }}/>
					<GalleryCard img={g3} title={'Maldives'} link={'/#'} subTitle={{ days: 2, nights: 3, price:550 }}/>
					<GalleryCard img={g4} title={'Greece'} link={'/#'} subTitle={{ days: 3, nights: 4, price: 950 }}/>
					<GalleryCard img={g5} title={'London'} link={'/#'} subTitle={{ days: 2, nights: 3, price: 550 }}/>
					<GalleryCard img={g6} title={'Julian Alps'} link={'/#'} subTitle={{ days: 3, nights: 4, price: 850 }}/>

				</div>
			</Container>
		</section>
	)
}

type GalleryCardPropsType = {
	img: string
	title: string
	subTitle: {
		days: number
		nights: number
		price: number | string
	}
	link: string
}

function GalleryCard(props: GalleryCardPropsType) {
	return (
		<div className={'gallery__card-wrapper'}>
			<div className={'gallery__card'}>
				<a href={props.link}>
					<div className={'gallery__card-img'}>
						<img src={props.img} alt={props.title}/>
					</div>
					<div className={'gallery__card-title'}>
						<h4>{props.title}</h4>
						<h6>{props.subTitle.days} Days, {props.subTitle.nights} Nights Start From <span
							className={'gallery__card-price'}>${props.subTitle.price}</span></h6>
					</div>
				</a>
			</div>
		</div>
	)
}

export default React.memo(Gallery)
