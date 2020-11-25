import React from 'react'
import { Container, Title } from '../../components/common'
import './styles.scss'

function VideoSub() {
	return (
		<section className={'video-sub'}>
			<Container>
				<div className={'video-sub__content'}>
					<div className={'video-sub__title'}>
						<Title type={'primary'} supTitle={'Short video'} title={'Find your perfect vacation'}/>
					</div>
					<div className={'video-sub__desc'}>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic odio voluptatem tenetur
							consequatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic odio voluptatem
							tenetur consequatur adipisicing elit.
						</p>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default React.memo(VideoSub)
