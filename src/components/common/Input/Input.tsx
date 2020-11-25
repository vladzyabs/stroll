import React from 'react'
import classes from './Input.module.scss'

type InputPropsType
	= {
	input: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
	type: 'input' | 'date'
	label?: string
}

function Input(props: InputPropsType) {
	const { label, type, input } = props
	const classesInput = `${classes.input} ${input.className ? input.className : ''}`

	return (
		<div className={classes.inputWrapper}>
			{label && <label>{label}</label>}
			<input {...input} type={type} className={classesInput}/>
		</div>
	)
}

export default React.memo(Input)
