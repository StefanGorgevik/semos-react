import ReactDOM from 'react-dom'
import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

//Components
import Menu from './components/Menu'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Login from './components/Login'
import Wrapper from './components/Wrapper'
import Wrapper2 from './components/Wrapper2'
import Child from './components/Child'
import Table from './components/Table'
import Error from './components/Error'
import UserInput from './components/UserInput'

import { Provider } from 'react-redux'
import store from './redux/store'

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
                <Route exact path='/user' component={Wrapper} />
                <Route exact path='/userinput' component={UserInput} />
                <Route exact path='/second' render={() => <Wrapper2 component={Table} url={'https://jsonplaceholder.typicode.com/users'} />} />
                <Route component={Error} />
            </Switch>
        </Router>
    )
}

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>, app)

//--------------------------------------------------------

// alert("Hello World");

// const newDiv = () => {
//     const div = document.createElement("div");
//     div.innerHTML = "<form><label>Username:<input type='text'></label><form>" 
//     const div2 = document.createElement("div");
//     div2.innerHTML = "<form><label>Email:<input type='email' required></label><input type='submit'><form>" 
//     document.body.append(div, div2); 
// }

// newDiv();

//-------------------------------------------------------------

// const Container = () => {
//     return (
//         <React.Fragment>
//             <Header/>
//             <Main/>
//             <User/>
//         </React.Fragment>
//     )
// }

