import React, { useState, createContext } from 'react'


export const BookContext = createContext()

export const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        { title: "the way of kings", id: 1 },
        { title: "the name of the wind", id: 2 },
        { title: " the final empire", id: 3 }])

    const addBook = (book) => {
        setBooks([...books, book])
    }

    return (
        <BookContext.Provider value={{
            books: books,
            addBook: addBook
        }}>
            {props.children}
        </BookContext.Provider>
    )
}




