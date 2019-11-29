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
            <div>
                <p>{this.props.weather.weather.main}</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        weather: state.weatherReducer.weather
    }
}

export default connect(mapStateToProps)(Weather)