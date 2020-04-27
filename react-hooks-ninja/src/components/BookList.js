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

    let bookList = <p>Loading...</p>
    if (books) {
        bookList = books.map((book, i) => {
            return <Book title={book.title} key={book + i} background={theme.ui} />
        })
    }

    return (
        <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
            <ul>
                {bookList}
            </ul>
        </div>
    );
}

export default BookList;