import React from 'react'

export default class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }
    render() {
        return (
            <React.Fragment>
                <tbody>
                    <tr>
                        <td>{this.props.id}</td>
                        <td>{this.props.name}</td>
                        <td>{this.props.username}</td>
                        <td>{this.props.email}</td>
                        <td >{this.props.address}</td>
                        <td><button id={this.props.id} onClick={this.props.expandForm}>Expand</button></td>
                    </tr>
                </tbody>
            </React.Fragment>
        )
    }
}