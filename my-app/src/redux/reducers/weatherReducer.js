export function weatherReducer (state = {weather: []}, action) {
    switch(action.type) {
        case 'CHECK_WEATHER': {
            return {...state, weather: [action.payload]} 
        }
        default : {
            return {...state}
        }
    }
}
