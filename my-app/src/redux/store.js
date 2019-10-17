import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'

//reducers
import { userReducer, userInputReducer } from './reducers/userReducer'

const singleReducer = combineReducers({
    userReducer,
    userInputReducer
})

const store = createStore(
    singleReducer, 
    applyMiddleware(logger)
    )


export default store