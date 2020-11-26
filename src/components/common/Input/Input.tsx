import React from 'react'
import classes from './Input.module.scss'

type InputPropsType = {
	inputParam?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
	type: 'text' | 'date'
	label?: string
}

function Input(props: InputPropsType) {
	// @ts-ignore
	const { label, type, input, meta: { touched, error } , inputParam } = props

	return (
		<div className={classes.inputWrapper}>
			{label && <label>{label}</label>}
			{touched && error && <span className={classes.errorMsg}>{error}</span>}
			<input {...input}
						 {...inputParam}
						 type={type}
						 className={touched && error ? `${classes.input} ${classes.error}` : `${classes.input}`}
			/>
		</div>
	)
}

export default React.memo(Input)
