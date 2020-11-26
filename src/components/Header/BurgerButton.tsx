import React from 'react'
import classes from './styles.module.scss'

function BurgerButton(
	props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
) {
	return (
		<button {...props} className={classes.burgerBtn}/>
	)
}

export default BurgerButton
