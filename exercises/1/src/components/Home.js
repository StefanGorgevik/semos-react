import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import '../assets/styles/home.css'

export default class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="home-div" style={{ backgroundImage: "url('./assets/images/home-background.jpg')" }}>
                    <h1>Welcome to my page!</h1>
                    <h3>This is my first website created with ReactJS</h3>
                    <h4>Click on the button to join us!</h4>
                    <Link to="/main" className="join-link">Join us!</Link>
                </div>
            </React.Fragment>
        )
    }
}