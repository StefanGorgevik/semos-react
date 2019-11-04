import React, { Component } from 'react'
import '../../styles/todos.css'
import { connect } from 'react-redux'
import { addTodo } from '../../redux/actions/todoActions'

class Main extends Component {
    state = {
        todo: ''
    }
    saveTodo = (event) => {
        this.setState({todo: event.target.value})
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const newTodo = {
            id: Math.floor(Math.random() * 100),
            todo: this.state.todo
        }
        this.props.addTodo(newTodo)
    }

    render() {
        const { todos } = this.props
        console.log(this.props)
        const todoList = todos.map(todo => {
            return (
                <div className='todos' key={todo.id}>
                    <p className="todo">{todo.id} : {todo.todo}</p>
                </div>
            )
        })
        return (
            <div className='main'>
              <h1>Todos</h1>
                {todoList}
                <div className="add-todo">
                    <h3>Enter a new todo</h3>
                    <form>
                        <label>Add a todo:
                        <input type="text" id="todo" onChange={this.saveTodo}/>
                        </label>
                        <button onClick={this.handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todoReducer.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todo) => {dispatch(addTodo(todo))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)