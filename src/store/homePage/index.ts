import axios from 'axios'
import { GalleryToursType } from './types'
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(axios, { delayResponse: 2000 })

const SET_GALLERY_TOURS = 'SET_GALLERY_TOURS'

const initialState = {
	galleryTours: [] as GalleryToursType[],
}

type InitialStateType = typeof initialState

const homeReducer = (state = initialState, action: ActionType): InitialStateType => {
	switch (action.type) {
		case 'SET_GALLERY_TOURS':
			return {
				...state,
				galleryTours: action.payload,
			}
		default:
			return state
	}
}


// actions

const setGalleryTours = (value: any) => ({
	type: SET_GALLERY_TOURS,
	payload: value,
} as const)

type ActionType = ReturnType<typeof setGalleryTours>


// thunks

export const getGalleryTours =  () =>
	async	(dispatch: any) => {
		try {
			const res = await axios.get('/gallery')
			debugger
			dispatch(setGalleryTours(res.data.gallery))
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
