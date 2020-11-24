import React from 'react'
import classes from './Title.module.scss'

type TitlePropsType = {
	supTitle: string
	title: string
}

function Title(props: TitlePropsType) {
	return (
		<div className={classes.wrapper}>
			<span className={classes.supTitle}>{props.supTitle}</span>
			<h3 className={classes.title}>{props.title}</h3>
		</div>
	)
}

export default React.memo(Title)
