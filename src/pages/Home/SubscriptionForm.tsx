import React from 'react'
import { Field, reduxForm, InjectedFormProps } from 'redux-form'
import { Alert, Button, Container, Input, Title } from '../../components/common'
import { useDispatch, useSelector } from 'react-redux'
import { postEmailSubscription } from '../../store/homePage'
import './styles.scss'
import { AppRootStateType } from '../../store/rootReducer'

const validate = (values: { email: string }) => {
	const errors = {} as { email: string }

	if (!values.email) {
		errors.email = 'Required'
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address'
	}

	return errors
}

function SubscriptionForm() {
	const dispatch = useDispatch()
	const success = useSelector<AppRootStateType, boolean | null>(state => state.home.subscribeSuccess)
	const handleSubmit = (values: { email: string }) => {
		console.log(values)
		dispatch(postEmailSubscription(values.email))
	}

	return (
		<section className={'subscribe'}>
			{success && <Alert message={'You signed'}/>}
			<Container>
				<div className={'subscribe__content'}>
					<div className={'subscribe__title'}>
						<Title type={'secondary'} supTitle={'Lets stay in touch'} title={'Sign up for 25% discount'}/>
					</div>
					<p className={'subscribe__sup-desc'}>Want to get an instant discount for your next tour? Leave your email and
						sign up for our newsletter with
						25% off all our offers.</p>

					<FormRedux onSubmit={handleSubmit}/>

					<p className={'subscribe__sub-desc'}>Subscribe to our free weekly newsletter for new update releases (no
						spam)</p>
				</div>
			</Container>
		</section>
	)
}

function Form(props: InjectedFormProps) {
	const { handleSubmit } = props

	return (
		<form onSubmit={handleSubmit}>
			<div className={'subscribe__form-content'}>
				<div className={'subscribe__form-input'}>
					<Field name='email'
								 type='text'
								 placeholder='Email'
								 inputParam={{ placeholder: 'Email' }}
								 component={Input}
					/>
				</div>

				<div className={'subscribe__form-btn'}>
					<Button type={'submit'}>Submit</Button>
				</div>

			</div>
		</form>
	)
}

const FormRedux = reduxForm<any>({
	form: 'subscription', // имя формы в state (state.form.post)
	validate,
})(Form)

export default React.memo(SubscriptionForm)
