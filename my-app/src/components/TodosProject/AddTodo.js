import React, { Component } from 'react'

export default class AddTodo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todo: ''
        }
    }

    saveTodo = (event) => {
        this.setState({ todo: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTodo(this.state)
        this.setState({ todo: '' })
    }

    render() {
        return (
            <div className="add-todo">
                <h3>Enter a new todo</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Add a todo:
                        <input type="text" id="todo" value={this.state.todo} onChange={this.saveTodo} />
                    </label>
                </form>
            </div>
        )
    }
}