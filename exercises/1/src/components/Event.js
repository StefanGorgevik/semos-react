import React from 'react'

export default class Event extends React.Component {
    constructor() {
        super()
        this.state = {name: "Stefan"}
    }

    changeText(event) {
        this.setState ({name: "Majkl"})
    }

    render() {
        return (
            <div>
                <h1> Hello from Event</h1>
                <p>My name is {this.state.name}</p>
                <button onClick={this.changeText.bind(this)}>Change Text </button>
            </div>
        )
    }

}