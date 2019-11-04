import React from 'react'
import store from '../redux/store'
import { updateUser } from '../redux/actions/userActions'
import '../styles/login-form.css'
import Alert from './Alert'


export default class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    checkInput = (event) => {
        if (event.target.value.indexOf('@') <= 0) {
            console.log('You have an error in your mail.')
        }
        this.saveInput(event);
    }

    saveInput = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }

    submit = () => {
        alert(this.state.username + ' ' + this.state.password)
    }

    submitUser = () => {
        store.dispatch(updateUser(this.state.username, this.state.email, this.state.password))
    }

    render() {
        return (
            <React.Fragment>
                <Alert/>
                <div className="login-form">
                    <input
                        id='username'
                        placeholder='Username'
                        onChange={this.saveInput}
                    />
                    <input
                        id='email'
                        placeholder='Email'
                        onChange={this.checkInput}
                    />
                    <input
                        id='password'
                        placeholder='Password'
                        onChange={this.saveInput}
                    />
                    <button id='submit' onClick={this.submitUser}>Log in!</button>
                </div>
                
            </React.Fragment>
        )
    }
}

