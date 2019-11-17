import logger from 'redux-logger'
import { createStore, combineReducers, applyMiddleware } from 'redux' 

import math from './reducers/mathReducer'
import user from './reducers/userReducer'

export default createStore(combineReducers({
    math,
    user
}), 
{}, 
applyMiddleware( logger)); //myLogger,



//own logger

// const myLogger = (store) => (next) => (action) => {
//     console.log("Logged Action: ", action);
//     next(action);
// }
