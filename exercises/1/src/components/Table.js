import React from 'react'

import axios from 'axios'
import User from './User'
import ExpandForm from './ExpandForm'
import ExpandAddress from './ExpandAddress'

export default class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newData: [],
            data: []
        }
    }

    expandForm = (event) => {
        this.setState({ show: !this.state.show })
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                this.setState({ newData: response.data })             
                const users = response.data.map((user) => {
                    return (<User key={user.id} expandForm={this.expandForm} expandAddress={this.expandAddress} address={user.address.street} id={user.id} name={user.name} username={user.username} email={user.email} />)
                })
                this.setState({ data: users })
            })
            .catch((error) => {
                console.log(error)
            })
    }


    render() {
        return (
            <React.Fragment>
                <table style={{ border: '1px solid black' }}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Tools</th>
                        </tr>
                    </thead>
                    {this.state.data}
                </table>

                {this.state.show ? <ExpandForm id={this.state.newData[event.target.id - 1].id}
                    key={this.state.newData[event.target.id - 1].id}
                    name={this.state.newData[event.target.id - 1].name}
                    username={this.state.newData[event.target.id - 1].username}
                    email={this.state.newData[event.target.id - 1].email}
                    street={this.state.newData[event.target.id - 1].address.street}
                /> : null}
                {this.state.show ? <ExpandAddress /> : null}
            </React.Fragment>
        )
    }
}
