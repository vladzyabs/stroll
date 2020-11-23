import React from 'react'
import classes from './Input.module.scss'

type InputPropsType
	= React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
	& {}

function Input(props: InputPropsType) {
	return (
		<div className={classes.inputWrapper}>
			<label>input</label>
			<input type="date" placeholder="Date" className={classes.input}/>
		</div>
	)
}

export default React.memo(Input)
