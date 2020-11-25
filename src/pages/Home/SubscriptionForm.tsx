import React  from 'react'
import { Button, Container, Input, Title } from '../../components/common'
import './styles.scss'

function SubscriptionForm() {
	const [inputValue, setInputValue] = React.useState<string>('')
	const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value)
	}

	return (
		<section className={'subscribe'}>
			<Container>
				<div className={'subscribe__content'}>
					<div className={'subscribe__title'}>
						<Title type={'secondary'} supTitle={'Lets stay in touch'} title={'Sign up for 25% discount'}/>
					</div>
					<p className={'subscribe__sup-desc'}>Want to get an instant discount for your next tour? Leave your email and sign up for our newsletter with
						25% off all our offers.</p>

					<form>
						<div className={'subscribe__form-content'}>
							<div className={'subscribe__form-input'}>
								<Input type={'input'}
											 value={inputValue}
											 onChange={onChangeInputHandler}
								/>
							</div>

							<div className={'subscribe__form-btn'}>
								<Button >Submit</Button>
							</div>

						</div>
					</form>

					<p className={'subscribe__sub-desc'}>Subscribe to our free weekly newsletter for new update releases (no spam)</p>
				</div>
			</Container>
		</section>
	)
}

export default React.memo(SubscriptionForm)
