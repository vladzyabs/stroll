import React from 'react'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faLinkedinIn, faTwitter, faGooglePlusG, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Logo } from '../common'
import './Footer.scss'

function Footer() {
	return (
		<footer className={'footer'}>
			<Container>
				<div className={'content'}>

					<div className={'footer__block footer__about'}>
						<h2 className={'footer__about-logo'}>
							<Logo type={'secondary'}/>
						</h2>
						<p className="footer__about-description">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic odio voluptatem tenetur
							consequatur.Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</p>
						<div className={'footer__social-links'}>
							<ul>
								<li><a href="/#">
									<FontAwesomeIcon icon={faFacebookF}/>
								</a></li>
								<li><a href="/#">
									<FontAwesomeIcon icon={faLinkedinIn}/>
								</a></li>
								<li><a href="/#">
									<FontAwesomeIcon icon={faTwitter}/>
								</a></li>
								<li><a href="/#">
									<FontAwesomeIcon icon={faGooglePlusG}/>
								</a></li>
								<li><a href="/#">
									<FontAwesomeIcon icon={faGithub}/>
								</a></li>
							</ul>
						</div>
					</div>

					<div className={'footer__block footer__navbar-wrapper'}>
						<div>
							<h6 className={'footer__navbar-title'}>Quick links</h6>
							<nav className={'footer__navbar-links'}>
								<ul>
									<li>
										<FontAwesomeIcon icon={faAngleDoubleRight}/>
										<a href="/#">home</a>
									</li>
									<li>
										<FontAwesomeIcon icon={faAngleDoubleRight}/>
										<a href="/#">about</a>
									</li>
									<li>
										<FontAwesomeIcon icon={faAngleDoubleRight}/>
										<a href="/#">destinations</a>
									</li>
									<li>
										<FontAwesomeIcon icon={faAngleDoubleRight}/>
										<a href="/#">contact</a>
									</li>
								</ul>
							</nav>
						</div>
						<div>
							<h6 className={'footer__navbar-title'}>help & support</h6>
							<nav className={'footer__navbar-links'}>
								<ul>
									<li>
										<FontAwesomeIcon icon={faAngleDoubleRight}/>
										<a href="/#">live chart</a>
									</li>
									<li>
										<FontAwesomeIcon icon={faAngleDoubleRight}/>
										<a href="/#">faq</a>
									</li>
									<li>
										<FontAwesomeIcon icon={faAngleDoubleRight}/>
										<a href="/#">support</a>
									</li>
									<li>
										<FontAwesomeIcon icon={faAngleDoubleRight}/>
										<a href="/#">Terms of services</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>

					<div className={'footer__block footer__gallery'}>
						<h6 className={'footer__gallery-title'}>Instagram Gallery </h6>
						<div className={'footer__gallery-photos'}>
							<a href="/#"><img
								src="https://demo.w3layouts.com/demos_new/template_demo/04-04-2020/stroll-liberty-demo_Free/717367814/web/assets/images/g1.jpg"
								alt=""/></a>
							<a href="/#"><img
								src="https://demo.w3layouts.com/demos_new/template_demo/04-04-2020/stroll-liberty-demo_Free/717367814/web/assets/images/g2.jpg"
								alt=""/></a>
							<a href="/#"><img
								src="https://demo.w3layouts.com/demos_new/template_demo/04-04-2020/stroll-liberty-demo_Free/717367814/web/assets/images/g3.jpg"
								alt=""/></a>
							<a href="/#"><img
								src="https://demo.w3layouts.com/demos_new/template_demo/04-04-2020/stroll-liberty-demo_Free/717367814/web/assets/images/g4.jpg"
								alt=""/></a>
							<a href="/#"><img
								src="https://demo.w3layouts.com/demos_new/template_demo/04-04-2020/stroll-liberty-demo_Free/717367814/web/assets/images/g5.jpg"
								alt=""/></a>
							<a href="/#"><img
								src="https://demo.w3layouts.com/demos_new/template_demo/04-04-2020/stroll-liberty-demo_Free/717367814/web/assets/images/g6.jpg"
								alt=""/></a>
						</div>
					</div>

				</div>
			</Container>
		</footer>
	)
}

export default React.memo(Footer)
