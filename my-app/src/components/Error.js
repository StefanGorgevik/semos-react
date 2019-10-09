import React from 'react'

const Error = () => {
    return(
        <React.Fragment>
            <p>Something went wrong.</p>
           <button id='go-back-btn' onClick={() => window.history.back()}>Go back</button> 
        </React.Fragment>
    )
}

export default Error
