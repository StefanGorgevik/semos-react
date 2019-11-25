import React, { Component } from 'react';
import classes from './App.css';

import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[app.js] constructior')
    this.state = {
      persons: [
        { id: 'asf1', name: "Max", age: 28 },
        { id: 'asf2', name: "Stef", age: 25 },
        { id: 'asf3', name: "Iva", age: 20 }
      ],
      showPersons: false
    };
  }

  static getDerivedStateFromProps(props,state) {
    console.log('[app.js] get deprived', props);
    return state;
  }

  componentDidMount() {
    console.log('[app.js] componentdidmount ')
  }

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

  render() {
    console.log('[app.js] render')
    let persons = null;
    if (this.state.showPersons) {
      persons =
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          toggle={this.togglePersonsHandler}
        />
        {this.state.persons.length !== 0 ? persons : <h1>No more persons</h1>}

      </div>
    );
  }
}

export default App;
