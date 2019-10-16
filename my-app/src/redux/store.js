import { createStore } from 'redux'

//reducers
import { userReducer } from './reducers/userReducer'

const store = createStore(userReducer)


export default store