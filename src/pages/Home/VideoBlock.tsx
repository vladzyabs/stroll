// @ts-nocheck
import React from 'react'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ModalVideo from 'react-modal-video'
import 'react-modal-video/scss/modal-video.scss'
import { Container } from '../../components/common'
import bgImg from '../../assets/img/bgVideo.jpg'
import './styles.scss'

function VideoBlock() {
	const [isOpen, setOpen] = React.useState(false)

	return (
		<section className={'video'}>
			<Container>
				<ModalVideo channel='vimeo' autoplay isOpen={isOpen} videoId="92605278" onClose={() => setOpen(false)}/>

				<div className={'video__bg'}>
					<img src={bgImg} alt=""/>
					<button className={'video__btn'} onClick={() => setOpen(true)}>
						<FontAwesomeIcon icon={faPlay}/>
					</button>
				</div>

			</Container>
		</section>
	)
}

export default React.memo(VideoBlock)
