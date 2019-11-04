import React from 'react'
import store from '../redux/store'
import { addNewUser, deleteUser } from '../redux/actions/userActions'
import '../styles/login-form.css'
import UserInputTable from './UserInputTable'


export default class UserInput extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            address: '',
            phoneNumber: ''
        }
    }

    saveInput = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }

    submitUser = () => {
        store.dispatch(addNewUser(this.state.name, this.state.address, this.state.phoneNumber))
    }

    deleteUser = () => {
        store.dispatch(deleteUser())
    }

    render() {
        return (
            <React.Fragment>
                <div className="login-form">
                    <input
                        id='name'
                        placeholder='Name'
                        onChange={this.saveInput}
                    />
                    <input
                        id='address'
                        placeholder='Address'
                        onChange={this.saveInput}
                    />
                    <input
                        id='phoneNumber'
                        placeholder='Phone Number'
                        onChange={this.saveInput}
                    />
                    <button onClick={this.submitUser}>Submit!</button>
                    <button onClick={this.deleteUser}>Delete!</button>
                </div>
                <UserInputTable/>
            </React.Fragment>
        )
    }
}

