export function userReducer (state = {username: null, email: null, password: null}, action) {
    switch(action.type) {
        case 'CHANGE': {
            return {...state, username: "Stef"} //go zima stariot objekt i vraka array, ja pravi promenata, i vraka objekt
        }
        case 'ADD_USER': {
            return {...state, username: action.username} //go zima stariot objekt i vraka array, ja pravi promenata, i vraka objekt
        }
        case 'UPDATE_USER_AND_PASS': {
            return {...state, username: action.payload.password, email: action.payload.email, password: action.payload.password} //go zima stariot objekt i vraka array, ja pravi promenata, i vraka objekt
        }
        default : {
            return {...state}   // go zima objektot, pravi array i vraka objekt
        }
    }
}

export function userInputReducer (state = {name: null, address: null, phoneNumber: null}, action) {
    switch(action.type) {
        case 'ADD_USER': {
            return {...state, name: action.payload.name, address: action.payload.address, phoneNumber: action.payload.phoneNumber} //go zima stariot objekt i vraka array, ja pravi promenata, i vraka objekt
        }
        case 'DELETE_USER': {
            return {...state, name: null, address: null, phoneNumber: null} //go zima stariot objekt i vraka array, ja pravi promenata, i vraka objekt
        }
        default : {
            return {...state}   // go zima objektot, pravi array i vraka objekt
        }
    }
}
