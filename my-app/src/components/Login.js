import React from 'react'

export default class Login extends React.Component  {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    checkInput = (event) => {
        const inputValue = event.target.value
        if(event.target.value.indexOf('@') <= 0 ) {
            console.log('imas greska u mejlo')
        }
        this.saveInput(event);
    }

    saveInput = (event) => {
        this.setState({ [event.target.id]: event.target.value})
    }

    submit = () => {
        alert(this.state.username + ' ' + this.state.password)
    }

    render () {
        return (
            <React.Fragment>
                <input 
                    id ='username' 
                    placeholder='Username' 
                    onChange={this.checkInput}
                />
                <input 
                    id ='password' 
                    placeholder='Password' 
                    onChange={this.saveInput}
                />
                <button id='submit' onClick={this.submit}>Log in!</button>
            </React.Fragment>
        )
    }
}

