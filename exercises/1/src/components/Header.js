import React from 'react'
import { Link } from 'react-router-dom'

import "../assets/styles/header.css"

const Header = () => {
    return (
                <React.Fragment>
                    <header className="header">
                        <ul>
                            <li>
                                <Link to="/photos">Photos</Link>
                            </li>
                            <li>
                                <Link to="/description">Description</Link>
                            </li>
                            <li>
                                <Link to="/table">Table</Link>
                            </li>
                        </ul>

                    </header>
                </React.Fragment>
    )
}

export default Header