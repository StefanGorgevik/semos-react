const initState = {
    todos: [
        { id: 1, todo: "walk the dog" },
        { id: 2, todo: "do shopping" }
    ]
}

export const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TODO': {
            console.log(action.todo)
            // const newTodos = state.todos.push(action.todo)
            // return { ...state, todos: newTodos }
        }
        default: {
            return state
        }
    }
}