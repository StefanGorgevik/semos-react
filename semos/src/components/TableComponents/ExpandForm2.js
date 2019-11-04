import React from 'react'
import '../../styles/expand-form.css'

export default class ExpandForm extends React.Component {
    constructor() {
        super()
        this.state = { show: false }
    }
    render() {
        return (
            <React.Fragment>
                <div className='expand-div'>
                    <h2>User Data</h2>
                    <form>
                        <label>Id
                            <input type='number' defaultValue={this.props.id} />
                        </label>
                        <label>Name
                            <input type='text' defaultValue={this.props.name} />
                        </label>
                        <label>Email
                            <input type='text' defaultValue={this.props.email} />
                        </label>
                        <label>Phone
                            <input type='text' defaultValue={this.props.phone} />
                        </label>
                    </form>
                    <button>Save</button>
                    <button>Delete</button>
                    <button onClick={this.props.expandForm}>Close</button>
                </div>
            </React.Fragment>
        )
    }
}