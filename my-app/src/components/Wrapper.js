import React from 'react'
import data from '../data.js'
import User from './User'
import ExpandForm from './ExpandForm'
import '../styles/wrapper.css'

export default class Wrapper extends React.Component {
    constructor() {
        super()
        this.state = { show: false }
    }

    expandForm = (event) => {
        this.setState({ show: !this.state.show})
    }

    render() {
        let users = []
        users = data.map(user => {
            return (<User key={user.id} id={user.id} expandForm={this.expandForm} name={user.name} email={user.email} city={user.city} age={user.age} gender={user.gender} />)
        })
        return (
            <React.Fragment>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Tools</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users}
                    </tbody>
                </table>
                {this.state.show ? <ExpandForm key={data[event.target.id -1].id}
                                                expandForm={this.expandForm}
                                                id={data[event.target.id -1].id} 
                                                name={data[event.target.id -1].name} 
                                                email={data[event.target.id -1].email}
                                                city={data[event.target.id -1].city}
                                                age={data[event.target.id -1].age}
                                                gender={data[event.target.id -1].gender}/>: null}
            </React.Fragment>
        )
    }
}


// export default class Wrapper extends React.Component {
//     render () {
//         let users = []
//         users = data.map(element => {
//             return (<User key={element.id} name={element.name} email={element.email}/>)
//         })
//         console.log(users)
//             return (
//                 <React.Fragment>
//                 <div style={{border: "5px solid rgba(230, 55, 170)"}}>
//                  {users} 
//                  {this.props.children}  
//                  <p>Age is: {this.props.age}</p>
//                 </div>
//                  </React.Fragment>
//                  )
//         }       
// }


// export default class Wrapper extends React.Compontent {
//     render () {
//         for(const i in data) {
//             return (
//                 <UserInfo name="i.name" email="i.email"/>
//                 )
//         }
// }}

//funkcija
// const Wrapper = (props) => {
//     let users=[]
//     users = data.map(element => {
//         return (<User key={element.id} name={element.name} email={element.email}/>)
//     })
//     return (
//         <React.Fragment>
//             <div style={{ border: "5px solid rgba(230, 55, 170)" }}>
//                 {users}
//                 {props.children}
//                 <p>Age is: {props.age}</p>
//             </div>
//         </React.Fragment>
//     )
// }
// export default Wrapper

//{this.props.children}    <Wrapper> <Heading/><Menu/> -->{this.props.children </Wrapper> to expect children components