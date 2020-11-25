import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas, faBed, faPlane, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { Container } from '../../components/common'
import './styles.scss'

function Banner() {
	return (
		<section className={'banner'}>
			<Container>
				<div className={'banner__content'}>

					<div className={'banner__card'}>
						<div className={'banner__card-icon'}>
							<FontAwesomeIcon icon={faGlobeAmericas}/>
						</div>
						<h5><a href="/#">Voyages & Cruises</a></h5>
						<p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere.</p>
					</div>

					<div className={'banner__card'}>
						<div className={'banner__card-icon'}>
							<FontAwesomeIcon icon={faBed}/>
						</div>
						<h5><a href="/#">Hotel Bookings</a></h5>
						<p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere.</p>
					</div>

					<div className={'banner__card'}>
						<div className={'banner__card-icon'}>
							<FontAwesomeIcon icon={faPlane} transform={{ rotate: -45 }}/>
						</div>
						<h5><a href="/#">Air Tickets</a></h5>
						<p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere.</p>
					</div>

					<div className={'banner__card'}>
						<div className={'banner__card-icon'}>
							<FontAwesomeIcon icon={faFileAlt}/>
						</div>
						<h5><a href="/#">Visas</a></h5>
						<p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere.</p>
					</div>

				</div>
			</Container>
		</section>
	)
}

export default React.memo(Banner)
