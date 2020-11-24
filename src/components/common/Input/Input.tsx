import React from 'react'
import classes from './Input.module.scss'

type InputPropsType
	= React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
	& {
	type: 'input' | 'date'
	label?: string
}

function Input(props: InputPropsType) {
	const { label, type } = props
	const classesInput = `${classes.input} ${props.className ? props.className : ''}`

	return (
		<div className={classes.inputWrapper}>
			{label && <label>{label}</label>}
			<input {...props} type={type} className={classesInput}/>
		</div>
	)
}

export default React.memo(Input)
