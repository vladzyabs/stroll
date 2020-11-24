import React from 'react'
import classes from './Select.module.scss'

type SelectPropsType
	= {
	selectAtr: React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
	options: string[]
	label?: string
}

function Select(props: SelectPropsType) {
	const classesSelect = `${classes.select} ${props.selectAtr.className ? props.selectAtr.className : ''}`

	return (
		<div className={classes.selectWrapper}>
			{props.label && <label>{props.label}</label>}
			<select {...props.selectAtr} className={classesSelect}>
				<option>Any</option>
				{props.options.map((item, index) => <option key={index} value={item}>{item}</option>)}
			</select>
		</div>
	)
}

export default React.memo(Select)
