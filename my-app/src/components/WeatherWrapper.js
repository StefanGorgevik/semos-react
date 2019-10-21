import React from 'react'
import Error from './Error'
import Loading from './Loading'
import Weather from './Weather'
import axios from 'axios'
import { weatherAction } from '../redux/actions/weatherActions'
import store from '../redux/store'

export default class WeatherWrapper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            show: false,
            error: null,
            loading: false
        }
    }

    componentDidMount() {
        this.setState({ loading: true })
        axios.get('http://api.openweathermap.org/data/2.5/weather?id=2172797&APPID=53f5c0ddbd1027bd5c15ed83cfb697be')
            .then((response) => {
                this.setState({ data: response.data, loading: false })
                submitWeather()
            })
            .catch((error) => {
                this.setState({ error: <Error />, loading: false })
            })
    }
    
    submitWeather()  {
        store.dispatch(weatherAction(this.state.data))
    }

    render() {
        return (
            <React.Fragment>
                <h1>Welcome to the weather forecast!</h1>
                <Weather/>
            </React.Fragment>
        )
    }
}