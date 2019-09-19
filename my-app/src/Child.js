import React from 'react'


const Child = (props) => {
    return (
        <React.Fragment>
            <h5>Child</h5>
           <h3 style={{border: "5px solid grey", color:"blue"}}>Child name: {props.name}</h3>
        </React.Fragment>
    )
}

export default Child