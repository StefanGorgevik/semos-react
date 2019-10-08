import React from 'react'

export default class ExpandAddress extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="expandForm">
                    <h1>Change Data</h1>
                    <p>
                        <label>Address
                            <input type='number'/>
                        </label>
                        
                    </p>
                </div>
            </React.Fragment>
        )

    }
}