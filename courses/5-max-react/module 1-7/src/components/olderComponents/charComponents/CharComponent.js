import React from 'react'

const CharComponent = (props) => {
    const charStyle = {
        display: 'inline-block', 
        padding: '16px', 
        textAlign: 'center', 
        margin:' 16px', 
        border: '1px solid black'
    }
    return (
        <div onClick={props.clicked} style={charStyle}>
            <p>{props.character}</p>
        </div>
    )
}

export default CharComponent;