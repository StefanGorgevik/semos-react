import React from 'react'
import User2 from './User2'
import axios from 'axios'

import ExpandForm2 from './ExpandForm2'
import Error from './Error'
import '../styles/main.css'

export default class Wrapper2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newData: [],
            data: null
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                this.setState({ newData: response.data })
                const users = response.data.map(user => {
                    <User2 key={user.id} address={user.address.street} expandForm={this.expandForm} id={user.id} name={user.name} email={user.email} />
                })
                this.setState({ data: users })
            })
            .catch((error) => {
                this.setState({ data: <Error /> })
            })
    }

    expandForm = (event) => {
        this.setState({ show: !this.state.show })
    }

    render() {
        return (
            <React.Fragment>
                {!this.state.data ? <div className="lds-facebook"><div></div><div></div><div></div></div> :
                    <table style={{ border: '1px solid black' }}>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Tools</th>
                            </tr>
                        </thead>
                        {this.state.data}
                    </table>}
                {this.state.show ? <ExpandForm2
                    key={this.state.newData[event.target.id - 1].id}
                    id={this.state.newData[event.target.id - 1].id}
                    name={this.state.newData[event.target.id - 1].name}
                    email={this.state.newData[event.target.id - 1].email}
                    address={this.state.newData[event.target.id - 1].address.street}
                    expandForm={this.expandForm} /> : null}
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