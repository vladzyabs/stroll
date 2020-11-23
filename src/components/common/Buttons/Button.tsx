import React from 'react'
import classes from './Button.module.scss'

type ButtonPropsType
	= React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
	& {
	labelTitle?: string
}

function Button(props: ButtonPropsType) {
	const classesBtn = `${classes.button} ${props.className ? props.className : ''}`
	const { labelTitle } = props

	return (
		<div className={classes.buttonWrapper}>
			{labelTitle && <label>{labelTitle}</label>}
			<button {...props} className={classesBtn}/>
		</div>
	)
}

export default React.memo(Button)
