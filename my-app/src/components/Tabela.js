import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { writeUsersToStore } from '../redux/actions/writeUsersToStore'

class Tabela extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: null,
            data: null
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                // store.dispatch(fun(response.data))
                this.props.writeUsersToStore(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    addUser = () => {
        this.setState({
            showModal:
                <div>
                    <input placeholder='name' />
                    <input placeholder='username' />
                    <input placeholder='email' />
                    <input placeholder='address' />
                </div>
        })
    }

    editUser = (user) => {
        this.setState({
            showModal:
                <div>
                    <input defaultValue={user.name} />
                    <input defaultValue={user.username} />
                    <input defaultValue={user.email} />
                    <input defaultValue={user.address} />
                </div>
        })
    }

    render() {
        let header = null
        let usersList = null
        if (this.props.users) {
            // header = this.props.users.map((user) => {
            //     return <td></td>
            // })
            usersList = this.props.users.map((user) => {
                return <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                        {`${user.address.street} ${user.address.suite}`}
                    </td>
                    <td>
                        <button id='edit' onClick={() => this.editUser(user)}>Edit</button>
                    </td>
                </tr>
            })
        }
        return (
            <React.Fragment>.
                <button id="add" onClick={this.addUser}>Add new user</button>
                <table style={{ border: '1px solid black' }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>E-Mail</th>
                            <th>Street Address</th>
                            <th>Tools</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersList}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.userTableReducer.users
    }
}

function mapDispatchToProps(dispatch) {
    return {
        writeUsersToStore: (data) => dispatch(writeUsersToStore(data))   //za poveke parametri ...params
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabela)