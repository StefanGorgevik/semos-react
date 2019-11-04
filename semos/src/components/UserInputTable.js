import React from 'react'
import { connect } from 'react-redux'

class UserInputTable extends React.Component {
    render() {
        return (    
            <React.Fragment>
                <table style={{border: '1px solid black'}}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.props.user.name}</td>
                            <td>{this.props.user.address}</td>
                            <td>{this.props.user.phoneNumber}</td>
                        </tr>
                    </tbody>
                </table>
                
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userInputReducer
    }
}

export default connect(mapStateToProps)(UserInputTable)