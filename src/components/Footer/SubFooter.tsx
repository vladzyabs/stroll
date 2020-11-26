import React from 'react'
import { Container } from '../common'
import './Footer'

function SubFooter() {
	return (
		<section className={'footer__sub-footer'}>
			<Container>
				<div className={'content'}>
					<div className={'footer__sub-footer-l'}>
						<p>© 2020 Stroll. All rights reserved. Design by W3Layouts</p>
					</div>
					<div className={'footer__sub-footer-r'}>
						<ul>
							<li>
								<a href="/#">Privacy policy</a>
							</li>
							<li>
								<a href="/#">About us</a>
							</li>
							<li>
								<a href="/#">Contact us</a>
							</li>
						</ul>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default SubFooter
