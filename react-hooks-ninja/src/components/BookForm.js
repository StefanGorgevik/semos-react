import React, {useState, useContext} from 'react'

import {BookContext} from '../contexts/BookContext'

function BookForm() {
    const [title, setTitle] = useState('')
    const {addBook} = useContext(BookContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const newBook = {
            title, 
            id: Math.floor(Math.random() * 1000)
        }
        addBook(newBook)
        setTitle('')
    }

    return (
        <form>
            <label htmlFor="input">Add book</label>
            <input type='text' onChange={e => setTitle(e.target.value) } value={title} required />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default BookForm
