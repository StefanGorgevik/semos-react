import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person'
import { UserOutput } from './UserOutput/UserOutput'
import { UserInput } from './UserInput/UserInput'

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Stef", age: 25 },
      { name: "Iva", age: 20 }
    ],
    users: [
      { username: "Stefan" },
      { username: "Iva" }
    ]

  };


  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Stef", age: 25 },
        { name: "Iva", age: 20 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 25 },
        { name: "Iva", age: 20 }
      ]
    })
  }

  userInput = (event) => {
    this.setState({
      users: [
        { username: event.target.value },
        { username: event.target.value }]
    })
  }


  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: "pointer"
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button style={style} onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={() => this.switchNameHandler('Max!')}
          changed={this.nameChangedHandler}
        >My Hobbies: Racing </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
        <UserOutput username={this.state.users[0].username} />
        <UserInput username={this.state.users[0].username} userInput={this.userInput} />
        <UserOutput username={this.state.users[1].username} />
        <UserInput username={this.state.users[1].username} userInput={this.userInput} />
      </div>
    );
  }
}

export default App;


//import React, { useState } from 'react';

// const app = (props) => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: "Max", age: "28" },
//       { name: "Stef", age: "25" },
//       { name: "Iva", age: "20" }
//     ]
//   });

//   const [otherState, setOtherState = useState('some other value')]

//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         { name: "Maximilian", age: "28" },
//         { name: "Stef", age: "25" },
//         { name: "Iva", age: "20" }
//       ]
//     })
//   }

//   return (
//     <div className="App">
//       <h1>Hi, I'm a React App</h1>
//       <p>This is really working</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> My Hobbies: Racing </Person>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//     </div>
//   );
// }

// export default app;




