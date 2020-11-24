import React from 'react'
import { Container, Title } from '../../components/common'
import classes from './styles.module.scss'

function VideoSub() {
	return (
		<section className={classes.videoSub}>
			<Container>
				<div className={classes.content}>
					<div className={classes.videoSubItem}>
						<Title type={'primary'} supTitle={'Short video'} title={'Find your perfect vacation'}/>
					</div>
					<div className={classes.videoSubItem}>
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
