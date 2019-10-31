import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'

//reducers
import { userReducer, userInputReducer } from './reducers/userReducer'
import { weatherReducer } from './reducers/weatherReducer'
import { userTableReducer } from './reducers/userTableReducer'
import thunk from 'redux-thunk'

const singleReducer = combineReducers({
    userReducer,
    userInputReducer,
    weatherReducer,
    userTableReducer
})

const store = createStore(
    singleReducer, 
    applyMiddleware(logger, thunk)
    )


export default store