export function addUser(username) {
    return { type: 'ADD_USER', username }
}
// export function addPassword (password) {
//     return {type : 'ADD_PASSWORD', password}
// }

export function updateUser(username, email, password) {
    return {
        type: 'UPDATE_USER_AND_PASS',
        payload: {
            username, email, password
        }
    }
}

export function addNewUser(name, address, phoneNumber) {
    return {
        type: 'ADD_USER',
        payload: {
            name, address, phoneNumber
        }
    }
}

export function deleteUser(name, address, phoneNumber) {
    return {
        type: 'DELETE_USER',
        payload: {
            name, address, phoneNumber
        }
    }
}