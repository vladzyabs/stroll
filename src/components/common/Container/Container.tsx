import React from 'react'
import classes from './Container.module.scss'

type ContainerPropsType = {
	children: React.ReactNode
}

function Container({ children }: ContainerPropsType) {
	return <div className={classes.container}>{children}</div>
}

export default React.memo(Container)
