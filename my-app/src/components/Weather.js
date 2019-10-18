import React from 'react'

export default class Weather extends React.Component {
    constructor() {
        super()
        this.state = {
            show: false
        }
    }
    render() {
        return (
            <React.Fragment>
                <h1>Pick a city and see its forecast!</h1>
                <label>Enter a city:
                     <input type='text' placeholder="City" />
                </label>
                <button>Submit!</button>
                {this.props.data}
            </React.Fragment>
        )
    }
}