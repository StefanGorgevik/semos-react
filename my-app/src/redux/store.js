import { createStore } from 'redux'

//reducers
import { userReducer } from './reducers/userReducer'

const singleReducer = combineReducers({
    userReducer,
})

const store = createStore(singleReducer)


export default store