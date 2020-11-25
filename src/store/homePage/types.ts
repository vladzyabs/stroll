export type GalleryToursType = {
	id: string
	img: string
	title: string
	subTitle: {
		days: number
		nights: number
		price: number | string
	}
	link: string
}

export type ReviewsType = {
	id: string
	text: string
	user: {
		img: string
		name: string
		position: string
	}
}
