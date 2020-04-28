import React, { useContext, useEffect } from 'react';

import { ThemeContext } from '../contexts/ThemeContext'
import { BookContext } from '../contexts/BookContext'

import Book from './Book'

const BookList = () => {

    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const { books } = useContext(BookContext)
    useEffect(() => {
        console.log('use effect')
    }, [books])
    const theme = isLightTheme ? light : dark



    return books.length ? (
        <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
            <ul>
                {books.map(book =>
                    <Book book={book} key={book.id} background={theme.ui} />)}
            </ul>
        </div>
    ) : (
            <p>No books for you too read...</p>
        )
}

export default BookList;