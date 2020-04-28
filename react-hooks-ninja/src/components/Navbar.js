import React, {useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext'
import {AuthContext} from '../contexts/AuthContext'
import {BookContext} from '../contexts/BookContext'

const Navbar = () => {
    const {isLightTheme, light, dark} = useContext(ThemeContext)
    const {isAuthenticated} = useContext(AuthContext)
    const {books} = useContext(BookContext)
    const theme = isLightTheme ? light : dark
    return ( 
      <nav style={{ background: theme.ui, color: theme.syntax, }}>
        <h1>Context App</h1>
        {!isAuthenticated ? <p>Logged</p> : <p>Logged out</p>}
        <p>Currently you have {books.length} books to get through...</p>
      </nav>
    );
}
 
export default Navbar;