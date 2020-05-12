import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'
import Radium from 'radium';


class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Manu', age: 25 },
      { id: 3, name: 'Step', age: 26 },
    ],
    toggleShowHidePerson: true
  }

  ClickHandler = () => {
    const show = this.state.toggleShowHidePerson;
    this.setState({ toggleShowHidePerson: !show });
  }

  deleteClickHandler = (index) => {
    const persons = this.state.persons.slice();
    persons.splice(index, 1);
    this.setState({ persons: persons })
  }

  render() {
    return (
      <div className="App">
       <Cockpit ClickHandler={this.ClickHandler} />
        {
           this.state.toggleShowHidePerson ? 
            <Persons persons={this.state.persons} deleteClickHandler={this.deleteClickHandler} /> 
            : null
        }
      </div>
    )

  }
}

export default Radium(App);
