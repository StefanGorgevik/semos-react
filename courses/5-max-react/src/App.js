import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person'
import { UserOutput } from './UserOutput/UserOutput'
import { UserInput } from './UserInput/UserInput'
import ValidationComponent from './Person/ValidationComponent'
import CharComponent from './Person/CharComponent'

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

  userInput = (event) => {
    this.setState({
      users: [
        { username: event.target.value },
        { username: event.target.value }]
    })
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
    this.setState({word: updatedText})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (<Person
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              name={person.name}
              age={person.age}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />)
          })}
        </div>
      );
    }

    let charList = this.state.word.split('').map((char, index) => {
      return <CharComponent clicked={() => this.deleteChar(index)} key={index} character={char}/>
    })

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
        <div>
          <input type="text" onChange={this.countChar} value={this.state.word} />
          <p>This word has {this.state.word.length} characters!</p>
          <ValidationComponent chars={this.state.word.length} />
          {charList}
        </div>
        <div>
          <UserOutput username={this.state.users[0].username} />
          <UserInput username={this.state.users[0].username} userInput={this.userInput} />
          <UserOutput username={this.state.users[1].username} />
          <UserInput username={this.state.users[1].username} userInput={this.userInput} />
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