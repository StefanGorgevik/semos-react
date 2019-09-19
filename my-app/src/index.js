// alert("Hello World");

// const newDiv = () => {
//     const div = document.createElement("div");
//     div.innerHTML = "<form><label>Username:<input type='text'></label><form>" 
//     const div2 = document.createElement("div");
//     div2.innerHTML = "<form><label>Email:<input type='email' required></label><input type='submit'><form>" 
//     document.body.append(div, div2); 
// }

// newDiv();

import ReactDOM from 'react-dom'
import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

//Components
import Menu from './Menu'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Login from './Login'
import Wrapper from './Wrapper'
import Child from './Child'
import Error from './Error'


import './styles/style.css'
const app = document.querySelector("#app")

const Routes = () => {
    return (
        <Router>
            <Menu />
            <Switch>
                <Route exact path='/' render={() => <Home name="Stefan" />} />/>
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user' render={(props) =>
                <Wrapper age="25">
                    <Child name="stefan" style="1px solid grey"/>
                </Wrapper>} />
                <Route component={Error} />
            </Switch>
        </Router>
    )
}

// const Container = () => {
//     return (
//         <React.Fragment>
//             <Header/>
//             <Main/>
//             <User/>
//         </React.Fragment>
//     )
// }

ReactDOM.render(<Routes />, app)