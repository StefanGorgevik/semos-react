import React from 'react'
import Users from './Users'

import ExpandForm2 from './ExpandForm2'
import '../styles/main.css'

export default class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }
    
    expandForm = (event) => {
        this.setState({ show: !this.state.show })
    }

    render() {
        const { data } = this.props
        const users = data.map(user => {
            return (<Users key={user.id} id={user.id} expandForm={this.expandForm} name={user.name} email={user.email} phone={user.phone} />)
        })
        return (
            <React.Fragment>
                {/* {!this.state.data ? <div className="lds-facebook"><div></div><div></div><div></div></div> : */}
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
                    <tbody>
                        {users}
                    </tbody>
                </table>
                {this.state.show ? <ExpandForm2
                    key={data[event.target.id - 1].id}
                    id={data[event.target.id - 1].id}
                    name={data[event.target.id - 1].name}
                    email={data[event.target.id - 1].email}
                    phone={data[event.target.id - 1].phone}
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