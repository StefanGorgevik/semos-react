import React, {useState, useContext} from 'react'

import {BookContext} from '../contexts/BookContext'
import {ThemeContext} from '../contexts/ThemeContext'

function BookForm() {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const {dispatch} = useContext(BookContext)
    const {isLightTheme, light, dark} = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const newBook = {
            title, 
            author,
            id: Math.floor(Math.random() * 1000)
        }
        dispatch({type: "ADD_BOOK", payload: newBook})
        setTitle('')
        setAuthor('')
    }

    return (
        <form style={{ background: theme.bg, color: theme.syntax}}>
            <input style={{background: theme.bg}} type='text' onChange={e => setTitle(e.target.value) } value={title} required placeholder="book title" />
            <input style={{background: theme.bg}} type='text' onChange={e => setAuthor(e.target.value) } value={author} required placeholder="book author" />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default BookForm
