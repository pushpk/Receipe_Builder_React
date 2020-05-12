import React, { Component } from 'react';
import './App.css';
import Person from '../components/Person/Person';
import Radium from 'radium';


class App extends Component {
  state = {
    persons: [
      {id:1, name: 'Max', age: 28 },
      {id:2, name: 'Manu', age: 25 },
      {id:3, name: 'Step', age: 26 },


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
    this.setState({persons : persons })

  }


 
  render() {

    const styles = {

      backgroundColor : 'green',
      textAlign: 'center',
      padding: '5px',
      ':hover':{ backgroundColor : 'lightgray'}

    }
    var person = null;
      if(this.state.toggleShowHidePerson){
        person = (
          <div>
            { this.state.persons.map((person, index) => {
              return <Person name={person.name} age= {person.age} key={person.id} click={ () => this.deleteClickHandler(index)} />
            })}
         </div>
        )

        styles.backgroundColor = 'blue';
      }

    return (
      <div className="App">
        <header className="App-header">
          <h1>React App - Hello</h1>
        </header>
        <button style={styles} onClick={this.ClickHandler}> Swtich Person</button>
        {person}
      </div>
    )
    
  }
}

export default Radium(App);
