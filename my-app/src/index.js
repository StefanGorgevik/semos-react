// alert("Hello World");

// const newDiv = () => {
//     const div = document.createElement("div");
//     div.innerHTML = "<form><label>Username:<input type='text'></label><form>" 
//     const div2 = document.createElement("div");
//     div2.innerHTML = "<form><label>Email:<input type='email' required></label><input type='submit'><form>" 
//     document.body.append(div, div2); 
// }

// newDiv();

import ReactDOM from 'react-dom';
import React from 'react';
import User from './User'
import Header from './Header'
import Main from './Main'
import './styles/style.css';
const app = document.querySelector("#app");

const Container = () => {
    return (
        <React.Fragment>
            <Header/>
            <Main/>
            <User/>
        </React.Fragment>
    )
}

ReactDOM.render(<Container/>, app)