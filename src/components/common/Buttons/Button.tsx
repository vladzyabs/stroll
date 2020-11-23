import React from 'react'
import classes from './Button.module.scss'

type ButtonPropsType
	= React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
	& {
	label?: string
}

function Button(props: ButtonPropsType) {
	const classesBtn = `${classes.button} ${props.className ? props.className : ''}`
	const { label } = props

	return (
		<div className={classes.buttonWrapper}>
			{label && <label>{label}</label>}
			<button {...props} className={classesBtn}/>
		</div>
	)
}

export default React.memo(Button)
