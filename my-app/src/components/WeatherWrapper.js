import React from 'react'
import Error from './Error'
import Loading from './Loading'
import axios from 'axios'

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
        axios.get(this.props.url)
            .then((response) => {
                console.log(response)
                this.setState({ data: response.data, loading: false })
            })
            .catch((error) => {
                console.log(error)
                this.setState({ error: <Error />, loading: false })
            })
    }

    render() {
        return (
            <React.Fragment>
                <this.props.component data={this.state.data}/>
                {this.state.error}
                {this.state.loading && <Loading/>} 
            </React.Fragment>

        )
    }
}