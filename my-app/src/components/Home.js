import React from 'react'
import store from '../redux/store'
import { addUser } from '../redux/actions/userActions'

class Home extends React.Component {
    constructor (/*props*/) {
        super(/*props*/)
        /*Initial State*/ 
        this.state = {
            show: false,
            username: ""
        }
    }
    showOrHide = (event) => {
        this.setState({ show: !this.state.show })
            // if (!this.state.show) {
            //     this.setState({show:true})
            // } else {
            //     this.setState({show:false})
            // }
    }

    saveUser = (event) => {
        this.setState({ [event.target.id]: event.target.value})
    }

    submitUsername= (event) => {
        console.log(store.getState())
        store.dispatch(addUser(this.state.username))
        console.log(store.getState())
    }

    /* Render Metod*/ 
    render () {
        return (
            <React.Fragment>
                <button id='toggle'onClick={this.showOrHide} >Toggle me</button>
                {this.state.show ? <div>Hello Semos!</div> : null}
                <h1>Submit your username</h1>
                <input id ='username' placeholder='username' onChange={this.saveUser} />
                <button id='submit' onClick={this.submitUsername}>Log in!</button>
            </React.Fragment>
        )

        // najnovite state i props
        // let div = <div>Hello Semos!</div>
        // if(!this.state.show) {
        //     div = null
        // }
    }
}

export default Home