import React from 'react'
import data from './data.js'
import User from './User'

// export default class Wrapper extends React.Compontent {
//     render () {
//         for(const i in data) {
//             return (
//                 <UserInfo name="i.name" email="i.email"/>
//                 )
//         }
        
// }}

export default class Wrapper extends React.Component {
    render () {
        let users = []
        users = data.map(element => {
            return (<User key={element.id} name={element.name} email={element.email}/>)
        })
            return (
                <React.Fragment>
                 {users} 
                 {this.props.children}  
                 {this.props.age}  
                 </React.Fragment>
                 )
        }       
}

//{this.props.children}    <Wrapper> <Heading/><Menu/> -->{this.props.children </Wrapper> to expect children components