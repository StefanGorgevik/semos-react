import React, { Component } from 'react'

import Ninjas from './Ninjas'
import AddNinja from './AddNinja'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ninjas: [
        { name: "Stefan", age: 25, belt: "orange", id: 1 },
        { name: "Iva", age: 20, belt: "black", id: 2 },
        { name: "Darko", age: 24, belt: "white", id: 3 }
      ]
    }
  }
  
  addNinja = (ninja) => {
    ninja.id = Math.random()
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })
  }

  deleteNinja = (id) =>{
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    })
    this.setState({
      ninjas: ninjas
    })
  }

  componentDidMount() {
    console.log('component mounted')
  }

  render() {
    return (
      <div className="App">
        <h1>First react component</h1>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    )
  }

}

export default App
