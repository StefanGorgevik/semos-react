import React from 'react'
import './UserOutput.css'

export const UserOutput = (props) => {
    return (
        <div className='UserOutput'>
            <p>Hello {props.username}</p>
            <p>Write your name below!</p>
        </div>
    )
}