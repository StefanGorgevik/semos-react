import React from 'react'

export const UserInput = (props) => {
    const inputStyle = {
        border: '2px solid red'
    }
        return (
            <div>
                <p>Input your username!</p>
                <input style={inputStyle} type="text" defaultValue={props.username} onChange={props.userInput}/>
            </div>
        )
    
}