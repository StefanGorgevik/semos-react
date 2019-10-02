import React from 'react'

const Error = () => {
    return(
        <div>
            <p>Something went wrong.</p>
            <p>Path does not exist</p>
            <button id='go-back-btn' onClick={() => window.history.back()}>Go back</button>
        </div>
    )
}

export default Error
