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
