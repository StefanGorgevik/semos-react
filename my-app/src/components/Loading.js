import React from 'react'
import '../styles/main.css'

export default class Loading extends React.Component {
    constructor(props) {
        super(props)
    }

    render( ) {
        return(
            <React.Fragment>
                <div className="lds-facebook"><div></div><div></div><div></div></div>
            </React.Fragment>
        )
    }
}