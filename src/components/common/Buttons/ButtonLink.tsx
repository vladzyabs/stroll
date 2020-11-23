import React from 'react'
import classes from './Button.module.scss'

function ButtonLink() {
	return (
		<a className={classes.buttonLink} href="#">link</a>
	)
}

export default React.memo(ButtonLink)
