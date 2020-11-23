import React from 'react'
import classes from './Select.module.scss'

type SelectPropsType
	= React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
	& {
	options: string[]
}

function Select(props: SelectPropsType) {
	return (
		<div className={classes.selectWrapper}>
			<label>Select</label>
			<select name="select" id="123" className={classes.select}>
				<option>Any</option>
				{props.options.map((item, index) => <option key={index}>{item}</option> )}
			</select>
		</div>
	)
}

export default React.memo(Select)
