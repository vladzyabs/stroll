import React from 'react'
import classes from './Select.module.scss'

type SelectPropsType
	= {
	selectParam?: React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
	options: string[]
	label?: string
}

function Select(props: SelectPropsType) {
	// @ts-ignore
	const { label, options, input, meta: { touched, error }, selectParam } = props

	return (
		<div className={classes.selectWrapper}>
			{label && <label>{label}</label>}
			{touched && error && <span className={classes.errorMsg}>{error}</span>}
			<select {...input}
							{...selectParam}
							className={touched && error ? `${classes.select} ${classes.error}` : `${classes.select}`}
			>
				<option>Any</option>
				{options.map((item, index) => <option key={index} value={item}>{item}</option>)}
			</select>
		</div>
	)
}

export default React.memo(Select)
