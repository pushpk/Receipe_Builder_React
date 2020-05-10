import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {

  state = [
    {name : 'Pushpak', job : 'Dev'},
    {name : 'Avani', job : 'QA'}
  ]

  changeNames(event)
  { 
    this.setState([ {name : event.target.value, job : 'Dev'},
    {name : 'Avani 3', job : 'QA'}]
     )
  }

  render (){
  
    return(
    <div className="App">
      <header className="App-header">
       <h1>React App - Hello</h1>
        <UserInput changeName={this.changeNames.bind(this)} />

       <button onClick={this.changeNames.bind(this)} value="Change Name">Chnage Name</button>
        <UserOutput   name={this.state[0].name} job={this.state[0].job} />
        <UserOutput name={this.state[1].name} job={this.state[1].job} />
      </header>
    </div>
    )
  }
}

export default App;
