import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'

//reducers
import { userReducer, userInputReducer } from './reducers/userReducer'
import { weatherReducer } from './reducers/weatherReducer'
import { userTableReducer } from './reducers/userTableReducer'

const singleReducer = combineReducers({
    userReducer,
    userInputReducer,
    weatherReducer,
    userTableReducer
})

const store = createStore(
    singleReducer, 
    applyMiddleware(logger)
    )


export default store