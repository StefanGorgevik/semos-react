import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

//reducers
import { userReducer, userInputReducer } from './reducers/userReducer'
import { weatherReducer } from './reducers/weatherReducer'
import { userTableReducer } from './reducers/userTableReducer'
import { todoReducer } from './reducers/todoReducer'

const singleReducer = combineReducers({
    userReducer,
    userInputReducer,
    weatherReducer,
    userTableReducer,
    todoReducer
})

const store = createStore(
    singleReducer, 
    applyMiddleware(logger, thunk)
    )


export default store