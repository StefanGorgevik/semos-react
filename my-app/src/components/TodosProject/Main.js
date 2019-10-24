import React, { Component } from 'react'
import Todos from './Todos'
import AddTodo from './AddTodo'
import '../../styles/todos.css'

export default class Main extends Component {
    state = {
            todos: [
                { id: 1, todo: "walk the dog" },
                { id: 2, todo: "do shopping" }
            ]
        
    }

    addTodo = (todo) => {
        todo.id = Math.floor(Math.random() * 100)
        console.log(todo)
        let todos = [...this.state.todos, todo]
        this.setState({ todos: todos })
    }

    render() {
        return (
            <div>
                <h1>Todos</h1>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} />
            </div>
        )
    }
}