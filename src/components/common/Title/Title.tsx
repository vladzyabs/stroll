import React from 'react'
import classes from './Title.module.scss'

type TitlePropsType = {
	supTitle: string
	title: string
	type: 'primary' | 'secondary'
}

function Title(props: TitlePropsType) {
	const classType = props.type === 'primary'
		? `${classes.wrapper} ${classes.primary}`
		: `${classes.wrapper} ${classes.secondary}`

	return (
		<div className={classType}>
			<span className={classes.supTitle}>{props.supTitle}</span>
			<h3 className={classes.title}>{props.title}</h3>
		</div>
	)
}

export default React.memo(Title)
