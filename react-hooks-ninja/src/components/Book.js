import React, {useContext} from 'react'
import { BookContext } from '../contexts/BookContext'

function Book({book, background}) {
    const {dispatch} = useContext(BookContext)
    return (
        <li onClick={() => dispatch( {type: "REMOVE_BOOK", id: book.id})} style={{background: background}}>
            <div className="title">{book.title} </div>
            <div className="author">{book.author} </div>
        </li>
    )
}

export default Book
