import React from 'react'

const Todos = ({ todos }) => {
    const todoList = todos.map(todo => {
        return (
            <div className='todos' key={todo.id}>
                <p>{todo.id} : {todo.todo.charAt(0).toUpperCase()}</p>
            </div>
        )
    })
    return (
        <div>
           {todoList}
        </div>
    )
}

export default Todos