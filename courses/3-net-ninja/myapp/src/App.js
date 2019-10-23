import React, { Component } from 'react'

import Ninjas from './Ninjas'
import AddNinja from './AddNinja'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ninjas : [
        { name: "Stefan", age: 25, belt: "orange", id:1 },
        { name: "Iva", age: 20, belt: "black", id:2 },
        { name: "Darko", age: 24, belt: "white", id:3 }
      ]
  }
}
  render() {
    return (
      <div className="App">
        <h1>First react component</h1>
        <Ninjas ninjas={this.state.ninjas} />
        <AddNinja/>
      </div>
    )
  }

}

export default App
