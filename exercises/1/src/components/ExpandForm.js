import React from 'react'

export default class ExpandForm extends React.Component {
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
                        <label>ID
                            <input type='number' defaultValue={this.props.id}/>
                        </label>
                        <label>Name
                            <input type='text' defaultValue={this.props.name}/>
                        </label>
                        <label>Username
                            <input type='text' defaultValue={this.props.username}/>
                        </label>
                        <label>Email
                            <input type='text' defaultValue={this.props.email}/>
                        </label>
                        <label>Address
                            <input type='text' defaultValue={this.props.street}/>
                        </label>
                    </p>
                </div>
            </React.Fragment>
        )

    }
}