import React from 'react'
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
            city: ''
        }
    }

    saveInput = (event) => {
        this.setState({ city: event.target.value })
    }

    findCity() {
        const newTown = document.querySelector('#search-town').value
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${newTown}&APPID=53f5c0ddbd1027bd5c15ed83cfb697be`)
            .then((response) => {
                store.dispatch(weatherAction(response.data))
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <React.Fragment>
                <h1>Welcome to the weather forecast!</h1>
                <input id="search-town" onChange={this.saveInput} type="text" />
                <button onClick={this.findCity}>Search</button>
                <Weather />
            </React.Fragment>
        )
    }
}