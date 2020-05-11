import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';


class App extends Component {
  // state = {
  //   persons: [
  //     {id:1, name: 'Max', age: 28 },
  //     {id:2, name: 'Manu', age: 25 },
  //     {id:3, name: 'Step', age: 26 },


  //   ],
  //   toggleShowHidePerson: false
  // }

  // ClickHandler = () => {
  //   const show = this.state.toggleShowHidePerson;
  //   this.setState({ toggleShowHidePerson: !show });
  // }

  // deleteClickHandler = (index) => {
  //   const persons = this.state.persons.slice();
  //    persons.splice(index, 1);
  //   this.setState({persons : persons })

  // }


  state = {
    charCount: 0,
    text: '',
    charArray: []
  }
  charCountHandler = (event) => {

    const chars = event.target.value.length;
    const charsArray = event.target.value.split('');
    this.setState({
      charCount: chars,
      text: event.target.value,
      charArray: charsArray
    })
  }
  deleteCharHandler = (index) => {

    const arrayCopy = [...this.state.charArray]
    arrayCopy.splice(index, 1);
    this.setState({ charArray: arrayCopy });

  }
  render() {

    const charcmp = (
      this.state.charArray.map((l, index) => {
        return (<Char letter={l} deleteHandler={() => this.deleteCharHandler(index)} />)
      })
    )

    return (
      <div className="App">
        <header className="App-header">
          <h1>React App - Hello</h1>
        </header>

        <input type="text" onChange={(event) => this.charCountHandler(event)}  value={this.state.text}/>
        <p>{this.state.charCount}</p>
        <Validation charlimit={this.state.charCount} />

        {charcmp}



      </div>
    )
    // var person = null;
    //   if(this.state.toggleShowHidePerson){
    //     person = (
    //       <div>
    //         { this.state.persons.map((person, index) => {
    //           return <Person name={person.name} age= {person.age} key={person.id} click={ () => this.deleteClickHandler(index)} />
    //         })}
    //      </div>
    //     )
    //   }
  }
}

export default App;
