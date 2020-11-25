import React from 'react'
import { Button, Container, Input, Select, Title } from '../../components/common'
import './styles.scss'

const selectData = {
	destination: ['America', 'Africa', 'Asia', 'Eastern Europe', 'Europe', 'South America'],
	activity: ['City Tours', 'Cultural & Thematic Tours', 'Family Friendly Tours', 'Holiday & Seasonal Tours', 'Indulgence & Luxury Tours', 'Outdoor Activites', 'Relaxation Tours', 'Wild & Adventure Tours'],
	duration: ['1 Day Tour', '2-4 Days Tour', '5-7 Days Tour', '7+ Days Tour'],
}

function BookingForm() {
	return (
		<section className={'booking-form'}>
			<Container>
				<div className={'booking-form__content'}>
					<div className={'booking-form__title'}>
						<Title type={'primary'} supTitle={'10-30% off'} title={'book now'}/>
					</div>

					<form>
						<div className={'booking-form__form-content'}>
							<div className={'booking-form__item'}>
								<Input type={'input'} label={'Name'} input={{placeholder: 'Name'}}/>
							</div>
							<div className={'booking-form__item'}>
								<Select label={'Destination'} options={selectData.destination} selectAtr={{}}/>
							</div>
							<div className={'booking-form__item'}>
								<Select label={'Activity'} options={selectData.activity} selectAtr={{}}/>
							</div>
							<div className={'booking-form__item'}>
								<Select label={'Duration'} options={selectData.duration} selectAtr={{}}/>
							</div>
							<div className={'booking-form__item'}>
								<Input type={'date'} label={'Date'} input={{}}/>
							</div>
							<div className={'booking-form__item'}>
								<Button label={'Submit'}>Submit</Button>
							</div>
						</div>
					</form>

				</div>
			</Container>
		</section>
	)
}

export default React.memo(BookingForm)
