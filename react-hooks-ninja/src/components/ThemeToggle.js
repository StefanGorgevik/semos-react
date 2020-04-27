import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext'

const ThemeToggle = () => {
    const { toggleTheme } = useContext(ThemeContext)
    const { toggleAuth } = useContext(AuthContext)
    return (
        <>
            <button onClick={toggleTheme} >Toggle theme</button>
            <button onClick={toggleAuth} >Toggle auth</button>
        </>
    )
}

export default ThemeToggle
