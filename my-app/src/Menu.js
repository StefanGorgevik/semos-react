import React from 'react'
import './styles/menu.css';

import { BrowserRouter, Route, Link, Switch } from "react-router-dom"
const Menu = () => {
    return (
        <React.Fragment>
            <ul>
               <li>
               </li>
                   <Link to= '/'>Home</Link>
               <li>
                   <Link to= '/about'>About us</Link>
               </li>
               <li>
                   <Link to= '/contact'>Contact us</Link>
               </li>
               <li>
                   <Link to= '/login'>Login</Link>
               </li>
               <li>
                   <Link to= '/user'>User</Link>
               </li>
            </ul>   
        </React.Fragment>
    )
}

export default Menu