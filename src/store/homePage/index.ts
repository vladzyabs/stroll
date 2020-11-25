import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { Dispatch } from 'redux'
import { GalleryToursType, ReviewsType } from './types'

const mock = new MockAdapter(axios, { delayResponse: 2000 })

const SET_GALLERY_TOURS = 'SET_GALLERY_TOURS'
const SET_REVIEWS = 'SET_REVIEWS'

const initialState = {
	galleryTours: [] as GalleryToursType[],
	reviews: [] as ReviewsType[],
}

type InitialStateType = typeof initialState

const homeReducer = (state = initialState, action: ActionType): InitialStateType => {
	switch (action.type) {
		case 'SET_GALLERY_TOURS':
			return {
				...state,
				galleryTours: action.payload,
			}
		case 'SET_REVIEWS':
			return {
				...state,
				reviews: action.payload,
			}
		default:
			return state
	}
}


// actions

const setGalleryTours = (value: GalleryToursType[]) => ({
	type: SET_GALLERY_TOURS,
	payload: value,
} as const)

const setReviews = (value: ReviewsType[]) => ({
	type: SET_REVIEWS,
	payload: value,
} as const)

type ActionType
	= ReturnType<typeof setGalleryTours>
	| ReturnType<typeof setReviews>


// thunks

export const getGalleryTours = () =>
	async (dispatch: Dispatch) => {
		try {
			const res = await axios.get<{ gallery: GalleryToursType[] }>('/gallery')
			dispatch(setGalleryTours(res.data.gallery))
		} catch (e) {
			console.log(e)
			throw e
		}
	}

export const getReviews = () =>
	async (dispatch: Dispatch) => {
		try {
			const res = await axios.get<{ reviews: ReviewsType[] }>('/reviews')
			dispatch(setReviews(res.data.reviews))
		} catch (e) {
			console.log(e)
			throw e
		}
	}

export default homeReducer


mock.onGet('/gallery').reply(200, {
	gallery: [
		{
			id: '1',
			img: 'https://demo.w3layouts.com/demos_new/template_demo/04-04-2020/stroll-liberty-demo_Free/717367814/web/assets/images/g1.jpg',
			title: 'Paris',
			link: '/#',
			subTitle: {
				days: 3,
				nights: 4,
				price: 750,
			},
		},
		{
			id: '2',
			img: 'https://demo.w3layouts.com/demos_new/template_demo/04-04-2020/stroll-liberty-demo_Free/717367814/web/assets/images/g2.jpg',
			title: 'Bankok',
			link: '/#',
			subTitle: {
				days: 2,
				nights: 3,
				price: 650,
			},
		},
		{
			id: '3',
			img: 'https://demo.w3layouts.com/demos_new/template_demo/04-04-2020/stroll-liberty-demo_Free/717367814/web/assets/images/g3.jpg',
			title: 'Maldives',
			link: '/#',
			subTitle: {
				days: 2,
				nights: 3,
				price: 550,
			},
		},
		{
			id: '4',
			img: 'https://demo.w3layouts.com/demos_new/template_demo/04-04-2020/stroll-liberty-demo_Free/717367814/web/assets/images/g4.jpg',
			title: 'Greece',
			link: '/#',
			subTitle: {
				days: 3,
				nights: 4,
				price: 950,
			},
		},
		{
			id: '5',
			img: 'https://demo.w3layouts.com/demos_new/template_demo/04-04-2020/stroll-liberty-demo_Free/717367814/web/assets/images/g5.jpg',
			title: 'London',
			link: '/#',
			subTitle: {
				days: 2,
				nights: 3,
				price: 550,
			},
		},
		{
			id: '6',
			img: 'https://demo.w3layouts.com/demos_new/template_demo/04-04-2020/stroll-liberty-demo_Free/717367814/web/assets/images/g6.jpg',
			title: 'Julian Alps',
			link: '/#',
			subTitle: {
				days: 3,
				nights: 4,
				price: 850,
			},
		},
	],
})

mock.onGet('/reviews').reply(200, {
	reviews: [
		{
			id: '1',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			user: {
				img: 'https://demo.w3layouts.com/demos_new/template_demo/04-04-2020/stroll-liberty-demo_Free/717367814/web/assets/images/t1.jpg',
				name: 'Theo Hall',
				position: 'SEO Expert',
			},
		},
		{
			id: '2',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			user: {
				img: 'https://demo.w3layouts.com/demos_new/template_demo/04-04-2020/stroll-liberty-demo_Free/717367814/web/assets/images/t2.jpg',
				name: 'Jenna Johnson',
				position: 'SEO Expert',
			},
		},
		{
			id: '3',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			user: {
				img: 'https://demo.w3layouts.com/demos_new/template_demo/04-04-2020/stroll-liberty-demo_Free/717367814/web/assets/images/t3.jpg',
				name: 'Linda Carini',
				position: 'SEO Expert',
			},
		},
		{
			id: '4',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			user: {
				img: 'https://demo.w3layouts.com/demos_new/template_demo/04-04-2020/stroll-liberty-demo_Free/717367814/web/assets/images/t4.jpg',
				name: 'Mike Johnson',
				position: 'SEO Expert',
			},
		},
		{
			id: '5',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			user: {
				img: 'https://demo.w3layouts.com/demos_new/template_demo/04-04-2020/stroll-liberty-demo_Free/717367814/web/assets/images/t5.jpg',
				name: 'Theo Hall',
				position: 'Theo Hall',
			},
		},
		{
			id: '6',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			user: {
				img: 'https://demo.w3layouts.com/demos_new/template_demo/04-04-2020/stroll-liberty-demo_Free/717367814/web/assets/images/t5.jpg',
				name: 'Theo Hall',
				position: 'Jenna Johnson',
			},
		},
	],
})
