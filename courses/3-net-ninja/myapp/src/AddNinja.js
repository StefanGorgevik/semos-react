import React, { Component } from 'react'

export default class AddNinja extends Component {
    constructor() {
        super()
        this.state = {
            name: null,
            age: null,
            belt: null
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addNinja(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name" >Name:</label>
                    <input id="name" type="text" onChange={this.handleChange} />
                    <label htmlFor="age">Age:</label>
                    <input id="age" type="text" onChange={this.handleChange} />
                    <label htmlFor="belt" >Belt:</label>
                    <input id="belt" type="text" onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}