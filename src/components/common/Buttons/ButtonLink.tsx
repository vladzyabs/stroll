import React from 'react'
import classes from './Button.module.scss'

type ButtonLinkPropsType
	= React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>

function ButtonLink(props: ButtonLinkPropsType) {
	const classesAnchor = `${classes.buttonLink} ${props.className ? props.className : ''}`

	return (
		<a {...props} className={classesAnchor}>{props.children}</a>
	)
}

export default React.memo(ButtonLink)
