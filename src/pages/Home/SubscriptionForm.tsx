import React  from 'react'
import { Button, Container, Input, Title } from '../../components/common'
import classes from './styles.module.scss'

function SubscriptionForm() {
	const [inputValue, setInputValue] = React.useState<string>('')
	const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value)
	}

	return (
		<section className={classes.subscribeForm}>
			<Container>
				<div className={classes.content}>
					<div className={classes.title}>
						<Title type={'secondary'} supTitle={'Lets stay in touch'} title={'Sign up for 25% discount'}/>
					</div>
					<p className={classes.supDesc}>Want to get an instant discount for your next tour? Leave your email and sign up for our newsletter with
						25% off all our offers.</p>

					<form>
						<div className={classes.formContent}>
							<div className={classes.formInput}>
								<Input type={'input'}
											 value={inputValue}
											 onChange={onChangeInputHandler}
								/>
							</div>

							<div className={classes.formBtn}>
								<Button >Submit</Button>
							</div>

						</div>
					</form>

					<p className={classes.subDesc}>Subscribe to our free weekly newsletter for new update releases (no spam)</p>
				</div>
			</Container>
		</section>
	)
}

export default React.memo(SubscriptionForm)
