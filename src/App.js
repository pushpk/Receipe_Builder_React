import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons : [
      { name : 'Max', age : 28},
      { name : 'Manu', age : 25},
      { name : 'Step', age : 26},
    ]
  }

   ClickHandler = () =>{

    this.setState({persons : [
      { name : 'Max 1', age : 28},
      { name : 'Manu 2', age : 25},
      { name : 'Step 2', age : 26},
    ]});
   }

  render (){
    return(
    <div className="App">
      <header className="App-header">
       <h1>React App - Hello</h1>

       <button onClick={this.ClickHandler}>Click me!</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >ddd</Person>
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age} > Hobbies :  Play</Person>
      </header>
    </div>
    )
  }
}

export default App;
