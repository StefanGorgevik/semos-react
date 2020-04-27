import React from 'react'

function Book({title, background}) {
    return (
        <li style={{background: background}}>{title}</li>
    )
}

export default Book
