import React from 'react'
import classes from './styles.module.scss'

type NavbarPropsType = {
	active: boolean
}

function Navbar(props: NavbarPropsType) {
	const classesNavDesc = props.active
		? `${classes.navBarDesc} ${classes.active}`
		: `${classes.navBarDesc}`

	return (
		<nav className={classesNavDesc}>
			<ul>
				<li>
					<a href="/#">Home</a>
				</li>
				<li>
					<a href="/#">About</a>
				</li>
				<li>
					<a href="/#">Destinations</a>
				</li>
				<li>
					<a href="/#">Blog</a>
				</li>
				<li>
					<a href="/#">Contact</a>
				</li>
			</ul>
		</nav>
	)
}

export default React.memo(Navbar)
