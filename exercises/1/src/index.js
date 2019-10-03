import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

const main = document.querySelector(".main")

import Home from './components/Home'
import Main from './components/Main'
import Table from './components/Table'
import Header from './components/Header'
import Event from './components/Event'
import Description from './components/Description'
import Photos from './components/Photos'

const Routes = () => {
    return (
        <Router>
        <Header/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/event" component={Event} />
                <Route exact path="/main" component={Main} />
                <Route exact path="/table" component={Table} />
                <Route exact path="/description" component={Description} />
                <Route exact path="/photos" component={Photos} />
            </Switch>
        </Router>
    )
}

ReactDOM.render(<Routes />, main)