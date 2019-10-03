import React from 'react'
import Users from './Users'
import axios from 'axios'


export default class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null
        }
    }

    compontentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            console.log(response)
            const users = response.data.map(user => {
                <Users key={user.id} id={user.id} name={user.name} username={user.username} email={user.email}/>
            })
            this.setState({data: users})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render() {
        return(
            <React.Fragment>
                <table style={{border: '2px solid black'}}>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Username</td>
                            <td>Email</td>
                            <td>Tools</td>
                        </tr>
                    </thead>
                    {this.state.data}
                </table>
            </React.Fragment>
        )
    }
}