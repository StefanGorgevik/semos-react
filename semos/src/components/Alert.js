import React from 'react'
import { connect } from 'react-redux'

class Alert extends React.Component {
    render() {
        return (    
            <React.Fragment>
                <p>Username: {this.props.user.username}</p>
                <p>Email: {this.props.user.email}</p>
                <p>Password: {this.props.user.password}</p>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer
    }
}

export default connect(mapStateToProps)(Alert)