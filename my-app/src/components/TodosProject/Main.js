import React, { Component } from 'react'
import Todos from './Todos'
import AddTodo from './AddTodo'
import EditTodos from './EditTodos'
import '../../styles/todos.css'

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [
                { id: 1, todo: "walk the dog" },
                { id: 2, todo: "do shopping" }
            ],
            show: false,
            new: null
        }
    }

    showEdit = (id) => {
        this.setState({ show: !this.state.show })
        let todos = this.state.todos.filter(todo => {
            return todo.id !== id
        })
        this.setState({new: todos})
    }

    addTodo = (todo) => {
        todo.id = Math.floor(Math.random() * 50)
        let todos = [...this.state.todos, todo]
        this.setState({ todos: todos })
    }

    deleteTodo = (id) => {
        let todos = this.state.todos.filter(todo => {
            return todo.id !== id
        })
        this.setState({ todos: todos })
    }

    render() {
        return (
            <div className='main'>
                <h1>Todos</h1>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} showEdit={this.showEdit} />
                {this.state.show ? <EditTodos
                    showEdit={this.showEdit}
                    key={this.state.new}
                    todo={this.state.new}
                />
                    : null}
            </div>
        )
    }
}