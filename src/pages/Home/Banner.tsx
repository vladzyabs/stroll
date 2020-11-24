import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas, faBed, faPlane, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { Container } from '../../components/common'
import classes from './styles.module.scss'

function Banner() {
	return (
		<section className={classes.banner}>
			<Container>
				<div className={classes.content}>

					<div className={classes.bannerCard}>
						<div className={classes.cardIcon}>
							<FontAwesomeIcon icon={faGlobeAmericas}/>
						</div>
						<h5><a href="/#">Voyages & Cruises</a></h5>
						<p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere.</p>
					</div>

					<div className={classes.bannerCard}>
						<div className={classes.cardIcon}>
							<FontAwesomeIcon icon={faBed}/>
						</div>
						<h5><a href="/#">Voyages & Cruises</a></h5>
						<p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere.</p>
					</div>

					<div className={classes.bannerCard}>
						<div className={classes.cardIcon}>
							<FontAwesomeIcon icon={faPlane} transform={{ rotate: -45 }}/>
						</div>
						<h5><a href="/#">Voyages & Cruises</a></h5>
						<p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere.</p>
					</div>

					<div className={classes.bannerCard}>
						<div className={classes.cardIcon}>
							<FontAwesomeIcon icon={faFileAlt}/>
						</div>
						<h5><a href="/#">Voyages & Cruises</a></h5>
						<p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere.</p>
					</div>

				</div>
			</Container>
		</section>
	)
}

export default React.memo(Banner)
