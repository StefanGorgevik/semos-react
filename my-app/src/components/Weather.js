import React from 'react'
import { connect } from 'react-redux'

class Weather extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }


    render() {
        return (
            <React.Fragment>
                {/* <h1>Pick a city and see its forecast!</h1>
                <label>Enter a city:
                     <input type='text' placeholder="City" />
                </label>
                <button>Submit!</button>
                 <div>{nesto}</div>  */}
    
                <p>Name: {this.props.weather.name}</p>
                <p>ID: {this.props.weather.id}</p>
                <p>Temperature: {this.props.weather.temp}</p>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        weather: state.weatherReducer
    }
}

export default connect(mapStateToProps)(Weather)