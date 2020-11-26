import React from 'react'
import { Container, Logo } from '../common'
import classes from './styles.module.scss'
import Navbar from './Navbar'
import BurgerButton from './BurgerButton'

function Header() {
	const [activeNav, setActiveNav] = React.useState<boolean>(false)
	const toggleNavHandler = () => setActiveNav(prevState => !prevState)

	React.useEffect(() => {
		window.addEventListener('scroll', function() {
			if (window.pageYOffset > 65) {
				setActiveNav(false)
			}
		})
	}, [activeNav])

	return (
		<header className={classes.header}>
			<Container>
				<div className={classes.content}>
					<a className={classes.logo} href={'/#'}>
						<Logo type={'primary'}/>
					</a>
					<Navbar active={activeNav}/>
					<BurgerButton onClick={toggleNavHandler}/>
				</div>
			</Container>
		</header>
	)
}

export default React.memo(Header)
