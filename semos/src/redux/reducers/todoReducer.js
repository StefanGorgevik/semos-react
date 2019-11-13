const initState = {
    todos: [
        { id: 1, todo: "walk the dog" },
        { id: 2, todo: "do shopping" }
    ]
}

export const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TODO': {
            state = {
                ...state, todos: [...state.todos, action.todo]
            }
        }
        default: {
            return state
        }
    }
}