import React from 'react'

import axios from 'axios'
import User from './User'

export default class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newData: [],
            data: []
        }
    }

   
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                this.setState({ newData: response.data })
                console.log(response.data)
                const users = response.data.map((user) => {
                   return (<User key={user.id} address={user.address.street} id={user.id} name={user.name} username={user.username} email={user.email} />)
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
            </React.Fragment>
        )
    }
}


// {this.state.show ? <ExpandForm2 key={this.users[event.target.id - 1].id}
// expandForm={this.expandForm}
// id={this.users[event.target.id - 1].id}
// name={this.users[event.target.id - 1].name}
// email={this.users[event.target.id - 1].email}
// /> : null}