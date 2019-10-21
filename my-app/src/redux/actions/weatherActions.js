export function weatherAction(weather) {
    return {
        type: 'CHECK_WEATHER',
        payload: {
            weather
        }
    }
}