import { combineReducers } from 'redux'
import homeReducer from './homePage'
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
	home: homeReducer,

	form: formReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export default rootReducer
