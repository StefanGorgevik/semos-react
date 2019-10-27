import React from 'react'

export default class EditTodos extends React.Component {
    constructor() {
        super()
        this.state = {
            show: false,
            newTodo: '',
            
        }
    }

    saveChange = (event) => {
        console.log(event.target.value)
        this.setState({ newTodo: event.target.value })
    }

    submitChange = (event) => {

    }

    render() {
        console.log(this.props.todo[0].todo)
        return (
            <div className="edit-todos">
                <label>Todo:
                     <input type="text" onChange={this.saveChange} defaultValue={this.props.todo[0].todo} />
                </label>
                <button onClick={this.submitChange}>Save</button>
                <button onClick={this.props.showEdit}>Close</button>
            </div>
        )
    }
}

