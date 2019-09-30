import React from 'react'

const Header = () => {
    return (
        <Router>
            <Switch>
                <header>
                    <Link to="/photos">Photos</Link>
                    <Link to="/description">Description</Link>
                </header>
            </Switch>
        </Router>
    )
}

export default Header