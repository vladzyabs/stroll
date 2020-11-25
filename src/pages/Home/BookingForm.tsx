import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { Alert, Button, Container, Input, Select, Title } from '../../components/common'
import { postBooking } from '../../store/homePage'
import './styles.scss'
import { useDispatch, useSelector } from 'react-redux'
import { AppRootStateType } from '../../store/rootReducer'

const selectData = {
	destination: ['America', 'Africa', 'Asia', 'Eastern Europe', 'Europe', 'South America'],
	activity: ['City Tours', 'Cultural & Thematic Tours', 'Family Friendly Tours', 'Holiday & Seasonal Tours', 'Indulgence & Luxury Tours', 'Outdoor Activites', 'Relaxation Tours', 'Wild & Adventure Tours'],
	duration: ['1 Day Tour', '2-4 Days Tour', '5-7 Days Tour', '7+ Days Tour'],
}

type FormValuesType = {
	name: string
	destination: string
	activity: string
	duration: string
	date: string
}

const validate = (values: FormValuesType) => {
	const errors = {} as FormValuesType

	if (!values.name) {
		errors.name = 'Required'
	} else if (values.name.length < 3) {
		errors.name = 'Must be at least 3 characters'
	} else if (values.name.length >= 15) {
		errors.name = 'Must be 15 characters or less'
	}

	if (!values.date) {
		errors.date = 'Select a date'
	}

	if(!values.destination) {
		errors.destination = 'Select from the list'
	}

	if(!values.activity) {
		errors.activity = 'Select from the list'
	}

	if(!values.duration) {
		errors.duration = 'Select from the list'
	}

	return errors
}

function BookingForm() {
	const dispatch = useDispatch()
	const success = useSelector<AppRootStateType, boolean | null>(state => state.home.successfulBooking)

	const handleSubmit = (values: FormValuesType) => {
		dispatch(postBooking(values))
	}

	return (
		<section className={'booking-form'}>
			{success && <Alert message={'Successful booking'}/>}
			<Container>
				<div className={'booking-form__content'}>
					<div className={'booking-form__title'}>
						<Title type={'primary'} supTitle={'10-30% off'} title={'book now'}/>
					</div>

					<FormRedux onSubmit={handleSubmit}/>

				</div>
			</Container>
		</section>
	)
}

function Form(props: InjectedFormProps) {
	const { handleSubmit } = props

	return (
		<form onSubmit={handleSubmit}>
			<div className={'booking-form__form-content'}>
				<div className={'booking-form__item'}>
					<Field name='name'
								 type='text'
								 inputParam={{ placeholder: 'Name' }}
								 component={Input}
								 label={'Name'}
					/>
				</div>
				<div className={'booking-form__item'}>
					<Field name="destination"
								 label={'Destination'}
								 component={Select}
								 options={selectData.duration}
					/>
				</div>
				<div className={'booking-form__item'}>
					<Field name="activity"
								 label={'Activity'}
								 component={Select}
								 options={selectData.activity}
					/>
				</div>
				<div className={'booking-form__item'}>
					<Field name="duration"
								 label={'Duration'}
								 component={Select}
								 options={selectData.duration}
					/>
				</div>
				<div className={'booking-form__item'}>
					<Field name='date'
								 type='date'
								 component={Input}
								 label={'Date'}
					/>
				</div>
				<div className={'booking-form__item'}>
					<Button label={'Submit'} type={'submit'}>Submit</Button>
				</div>
			</div>
		</form>
	)
}

const FormRedux = reduxForm<any>({
	form: 'booking', // имя формы в state (state.form.post)
	validate,
})(Form)

export default React.memo(BookingForm)
