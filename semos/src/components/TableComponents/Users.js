import React from 'react'

export default class Users extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }
    render() {
        return (
            <React.Fragment>
                <tr>
                    <td>{this.props.id}</td>
                    <td>{this.props.name}</td>
                    <td>{this.props.email}</td>
                    <td>{this.props.phone}</td>
                    <td>
                        <button id={this.props.id} onClick={this.props.expandForm}>Expand</button>
                    </td>
                </tr>
            </React.Fragment>
        )
    }
}