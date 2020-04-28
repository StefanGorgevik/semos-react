import React, { createContext, useReducer, useEffect } from 'react'
import { bookReducer } from '../reducers/bookReducer'

export const BookContext = createContext()

export const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducer, [], () => { 
        const localData = localStorage.getItem('books') 
        return localData ? JSON.parse(localData) : [] // default value 
    })

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books])

    return (
        <BookContext.Provider value={{
            books,
            dispatch
        }}>
            {props.children}
        </BookContext.Provider>
    )
}




