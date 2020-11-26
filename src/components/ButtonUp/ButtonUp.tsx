import React from 'react'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './ButtonUp.module.scss'

function ButtonUp() {

	const [show, setShow] = React.useState<boolean>(false)

	const onUpHandler = () => {
		window.scrollTo({top: 0, behavior: 'smooth'});
	}

	React.useEffect(() => {
		window.addEventListener('scroll', function() {
			if (window.pageYOffset > 100) {
				setShow(true)
			} else {
				setShow(false)
			}
		})
	}, [setShow])

	const classShow = show
		? `${classes.buttonUp} ${classes.show}`
		: `${classes.buttonUp}`

	return (
		<button className={classShow} onClick={onUpHandler}>
			<FontAwesomeIcon icon={faArrowUp}/>
		</button>
	)
}

export default React.memo(ButtonUp)
