import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'

//reducers
import { userReducer, userInputReducer } from './reducers/userReducer'
import { weatherReducer } from './reducers/weatherReducer'

const singleReducer = combineReducers({
    userReducer,
    userInputReducer,
    weatherReducer
})

const store = createStore(
    singleReducer, 
    applyMiddleware(logger)
    )


export default store