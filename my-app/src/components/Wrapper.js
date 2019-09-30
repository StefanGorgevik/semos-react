import React from 'react'
import data from '../data.js'
import User from './User'

export default class Wrapper extends React.Component {
    render () {
        let users = []
        users = data.map(element => {
            return (<User key={element.id} name={element.name} email={element.email}/>)
        })
        console.log(users)
            return (
                <React.Fragment>
                <div style={{border: "5px solid rgba(230, 55, 170)"}}>
                 {users} 
                 {this.props.children}  
                 <p>Age is: {this.props.age}</p>
                </div>
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