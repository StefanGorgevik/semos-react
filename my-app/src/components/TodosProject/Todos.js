import React from 'react'

const Todos = ({ todos, showEdit, deleteTodo }) => {
    const todoList = todos.map(todo => {
        return (
            <div className='todos' key={todo.id}>
                <p>{todo.id} : {todo.todo}</p>
                <button onClick={() => {deleteTodo(todo.id) }}>Delete</button>
                <button onClick={() => {showEdit(todo.id) }}>Edit</button>
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