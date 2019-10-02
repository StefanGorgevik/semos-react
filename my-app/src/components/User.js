import React from 'react'
import '../styles/table.css'

export default class User extends React.Component {
    constructor() {
        super()
        this.state = {show:false}
    }
    render() {
        return (
            <React.Fragment>
                <tr>
                    <td>{this.props.id}</td>
                    <td>{this.props.name}</td>
                    <td>{this.props.email}</td>
                    <td>{this.props.city}</td>
                    <td>{this.props.age}</td>
                    <td>{this.props.gender}</td>
                    <td><button id={this.props.id} onClick={this.props.expandForm}>Expand</button></td>
                </tr>
            </React.Fragment>
        )
    }
}

// class User extends React.Component {
//     render() {
//         return (
//             <React.Fragment>
//                 <div style={{border:"1px solid black"}}>
//                     {this.props.name}
//                     <br/>
//                     {this.props.email}
//                     <button style={{marginLeft:" 30px"}}>Edit</button>
//                 </div>
//             </React.Fragment>
//         )
//     }
// }


// const User = (props) => {
//     return (
//         <React.Fragment>
//             {props.greeting}
//             <h1 id="greeting" className='text'>Hello {props.name}!</h1>
//         </React.Fragment>
//     )
// }

// class InputUser extends React.Component {
//     render() {
//         return (
//             <React.Fragment>
//                 <input className="text-field" type="text" name="text" id="text"/>
//             </React.Fragment>
//         )
//     }
// }


//ako ima potreba od state i constructor ti treba klasa
// class User extends React.Component {
//     render() {
//         return (
//             <React.Fragment>
//                 <h1>Hello {this.props.name}!</h1>
//             </React.Fragment>
//         )
//     }
// }