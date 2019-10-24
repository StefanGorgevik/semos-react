import React from 'react'
import '../styles/menu.css'

import { BrowserRouter, Route, Link, Switch } from "react-router-dom"
const Menu = () => {
    return (
        <React.Fragment>
            <div className="menu-div">
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About us</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact us</Link>
                    </li>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                </ul>
            </div>
            <hr />
            <div className="menu-div">
                <ul>
                    <li>
                        <Link to='/user'>User</Link>
                    </li>
                    <li>
                        <Link to='/second'>Second</Link>
                    </li>
                    <li>
                        <Link to='/userinput'>User Input</Link>
                    </li>
                    <li>
                        <Link to='/weather'>Weather </Link>
                    </li>
                    <li>
                        <Link to='/tabela'>Tabela </Link>
                    </li>
                    <li>
                        <Link to='/todos'>Todos</Link>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default Menu