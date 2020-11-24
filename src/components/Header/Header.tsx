import React from 'react'
import { Container, Logo } from '../common'
import classes from './styles.module.scss'
import Navbar from './Navbar'
import BurgerButton from './BurgerButton'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header() {
	const [activeNav, setActiveNav] = React.useState<boolean>(false)
	const toggleNavHandler = () => setActiveNav(prevState => !prevState)

	return (
		<header className={classes.header}>
			<Container>
				<div className={classes.content}>
					<a className={classes.logo} href={'/#'}>
						<Logo type={'primary'}/>
					</a>
					<Navbar active={activeNav}/>
					<BurgerButton style={{ display: 'none' }} onClick={toggleNavHandler}/>
				</div>
			</Container>
		</header>
	)
}

export default React.memo(Header)
