import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Title } from '../../components/common'
import { AppRootStateType } from '../../store/rootReducer'
import { GalleryToursType } from '../../store/homePage/types'
import { getGalleryTours } from '../../store/homePage'
import './styles.scss'
import axios  from "axios";
import MockAdapter  from "axios-mock-adapter";

function Gallery() {
	const dispatch = useDispatch()
	const items = useSelector<AppRootStateType, GalleryToursType[]>(state => state.home.galleryTours)

	React.useEffect(() => {
		dispatch(getGalleryTours())
	}, [])

	// // This sets the mock adapter on the default instance
	// var mock = new MockAdapter(axios);
	//
	// mock.onGet("/users").reply(200, {
	// 	users: [{ id: 1, name: "John Smith" }],
	// });
	//
	// axios.get("/users").then(function (response) {
	// 	console.log(response.data);
	// });

	return (
		<section className={'gallery'}>
			<Container>
				<div className={'gallery__title'}>
					<Title type={'primary'} supTitle={'Hot Tours'} title={'Popular packages'}/>
				</div>
				<div className={'gallery__content'}>

					{
						items.map(i => <GalleryCard key={i.id}
																				id={i.id}
																				img={i.img}
																				title={i.title}
																				link={i.link}
																				subTitle={{
																					days: i.subTitle.days,
																					nights: i.subTitle.nights,
																					price: i.subTitle.price,
																				}}
						/>)
					}

				</div>
			</Container>
		</section>
	)
}

type GalleryCardPropsType = GalleryToursType

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
