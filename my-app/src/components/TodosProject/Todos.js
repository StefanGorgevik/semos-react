import React from 'react'
import { connect } from 'react-redux'

class Todos extends React.Component {
    render() {
        console.log(this.props)
        const todoList = this.props.todos.map(todo => {
            return (
                <div className='todos' key={todo.id}>
                    <p>{todo.id} : {todo.todo}</p>
                    <button onClick={() => { deleteTodo(todo.id) }}>Delete</button>
                    <button onClick={() => { showEdit(todo.id) }}>Edit</button>
                </div>
            )
        })
        return (
            <div>
                {todoList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(Todos)