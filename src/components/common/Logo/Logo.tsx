import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import classes from './Logo.module.scss'

type LogoPropsType = {
	type: 'primary' | 'secondary'
}

export default function Logo({ type }: LogoPropsType) {

	const classType = type === 'primary'
		? `${classes.logo} ${classes.primary}`
		: `${classes.logo} ${classes.secondary}`

	return (
		<span className={classType}>
			Str<span className={classes.icon}><FontAwesomeIcon icon={faGlobeAmericas}/></span>ll
		</span>
	)
}
