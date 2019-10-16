export function userReducer (state = {username: "Stefan"}, action) {
    switch(action.type) {
        case 'CHANGE': {
            return {...state, username: "Stef"} //go zima stariot objekt i vraka array, ja pravi promenata, i vraka objekt
        }
        case 'ADD_USER': {
            return {...state, username: action.username} //go zima stariot objekt i vraka array, ja pravi promenata, i vraka objekt
        }
        default : {
            return {...state}   // go zima objektot, pravi array i vraka objekt
        }
    }
}
