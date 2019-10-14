import { createStore } from 'redux'

//reducers
import { userReducer } from './reducers/userReducer'

const store = createStore(userReducer)

console.log(store.getState())

export default store