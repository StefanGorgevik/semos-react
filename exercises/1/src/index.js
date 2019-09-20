import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

const main = document.querySelector(".main")

import Home from './components/Home'
import Main from './components/Main'
import Header from './components/Header'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/main" render={(props) => {
                    <React.Fragment>
                        <Header {...props} />
                        <Main {...props} />
                    </React.Fragment>
                }} />
            </Switch>
        </Router>
    )
}

ReactDOM.render(<Routes />, main)