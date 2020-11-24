import React from 'react'
import classes from './styles.module.scss'
import g1 from '../../assets/img/g1.jpg'
import g2 from '../../assets/img/g2.jpg'
import g3 from '../../assets/img/g3.jpg'
import g4 from '../../assets/img/g4.jpg'
import g5 from '../../assets/img/g5.jpg'
import g6 from '../../assets/img/g6.jpg'
import { Container, Title } from '../../components/common'

function Gallery() {
	return (
		<section className={classes.gallery}>
			<Container>
				<Title supTitle={'Hot Tours'} title={'Popular packages'}/>
				<div className={classes.content}>

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
		<div className={classes.galleryCardWrapper}>
			<div className={classes.galleryCard}>
				<a href={props.link}>
					<div className={classes.cardImg}>
						<img src={props.img} alt={props.title}/>
					</div>
					<div className={classes.cardTitle}>
						<h4>{props.title}</h4>
						<h6>{props.subTitle.days} Days, {props.subTitle.nights} Nights Start From <span
							className={classes.cardTitlePrice}>${props.subTitle.price}</span></h6>
					</div>
				</a>
			</div>
		</div>
	)
}

export default React.memo(Gallery)
