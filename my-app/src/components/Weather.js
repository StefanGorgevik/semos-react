import React from 'react'
import { connect } from 'react-redux'

class Weather extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }
    componentDidMount() {
        console.log(this.props.weather.weather[0])
    }

    render() {
        console.log(this.props.weather.weather[0])
        return (
            <React.Fragment>
              <h1>Weather</h1>
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