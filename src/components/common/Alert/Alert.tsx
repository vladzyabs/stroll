import React from 'react'
import classes from './Alert.module.scss'

type AlertPropsType = {
	message: string | null
}

const Alert = (props: AlertPropsType) => {

	const [showMessage, setShowMessage] = React.useState<boolean>(false)

	React.useEffect(() => {
		if (props.message) {
			setShowMessage(true)
			setTimeout(() => {
				setShowMessage(false)
			}, 5000)
		}
	}, [props.message])

	return (
		<div className={`${classes.message} ${showMessage ? classes.active : ''} `}>
			{props.message}
		</div>
	)
}

export default React.memo(Alert)
