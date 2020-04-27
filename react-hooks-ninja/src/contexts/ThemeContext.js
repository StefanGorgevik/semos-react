import React, { createContext, useState } from 'react';

const initState = {
    isLightTheme: true,
    light: { syntax: "#555", ui: '#ddd', bg: '#eee' },
    dark: { syntax: "#ddd", ui: '#333', bg: '#555' }
}

export const ThemeContext = createContext(initState)

export function ThemeContextProvider(props) {
    const [state, setState] = useState({
        isLightTheme: true,
        light: { syntax: "#555", ui: '#ddd', bg: '#eee' },
        dark: { syntax: "#ddd", ui: '#333', bg: '#555' }
    })

    const toggleTheme = () => {
        setState({...state, isLightTheme: !state.isLightTheme})
    }

    return (<ThemeContext.Provider value={{ ...state, toggleTheme }}>
        {props.children}
    </ThemeContext.Provider>);
}

