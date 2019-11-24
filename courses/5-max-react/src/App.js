import React, { Component } from 'react';
import classes from './App.css';

//import Radium, { StyleRoot } from 'radium'

import Person from './Person/Person'
// import { UserOutput } from './UserOutput/UserOutput'
// import { UserInput } from './UserInput/UserInput'
import ValidationComponent from './Person/ValidationComponent'
import CharComponent from './Person/CharComponent'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

class App extends Component {
  state = {
    persons: [
      { id: 'asf1', name: "Max", age: 28 },
      { id: 'asf2', name: "Stef", age: 25 },
      { id: 'asf3', name: "Iva", age: 20 }
    ],
    users: [
      { username: "Stefan" },
      { username: "Iva" }
    ],
    showPersons: false,
    word: ''
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })
    //const person = Object.assign({}, this.state.persons[personIndex]) old way
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons]
    persons[personIndex] = person;
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons]  //it spreads out the elements in an array into a list of el, which get added to a new arr
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  countChar = (event) => {
    this.setState({ word: event.target.value })
  }

  deleteChar = (index) => {
    const text = this.state.word.split('');
    text.splice(index, 1);
    const updatedText = text.join('')
    this.setState({ word: updatedText })
  }

  render() {

    let persons = null;
    let btnClass = null

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (<ErrorBoundary key={person.id}>
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            </ErrorBoundary>)
          })}
        </div>
      );
      btnClass = classes.Red;
    }

    let charList = this.state.word.split('').map((char, index) => {
      return <CharComponent clicked={() => this.deleteChar(index)} key={index} character={char} />
    })

    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold)
    }


    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>Dynamical styles</p>
        <button className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
        <div>
          <input type="text" onChange={this.countChar} value={this.state.word} />
          <p>This word has {this.state.word.length} characters!</p>
          <ValidationComponent chars={this.state.word.length} />
          {charList}
        </div>
      </div>
    );
  }
}

export default App;

//react hooks
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



//before map
//          <Person
//             name={this.state.persons[0].name}
//             age={this.state.persons[0].age}
//           />
//           <Person
//             name={this.state.persons[1].name}
//             age={this.state.persons[1].age}
//             click={() => this.switchNameHandler('Max!')}
//             changed={this.nameChangedHandler}
//           >My Hobbies: Racing </Person>
//           <Person
//             name={this.state.persons[2].name}
//             age={this.state.persons[2].age} />


  // switchNameHandler = (newName) => {
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: "Stef", age: 25 },
  //       { name: "Iva", age: 20 }
  //     ]
  //   })
  // }


  //User input output assignment

  // userInput = (event) => {
  //   this.setState({
  //     users: [
  //       { username: event.target.value },
  //       { username: event.target.value }]
  //   })
  // }

  // <div>
  //         <UserOutput username={this.state.users[0].username} />
  //         <UserInput username={this.state.users[0].username} userInput={this.userInput} />
  //         <UserOutput username={this.state.users[1].username} />
  //         <UserInput username={this.state.users[1].username} userInput={this.userInput} />
  //       </div>