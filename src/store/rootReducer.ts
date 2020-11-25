import { combineReducers } from 'redux'
import homeReducer from './homePage'

const rootReducer = combineReducers({
	home: homeReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export default rootReducer
