import React, { Component } from 'react';
import Person from './Person/Person'

class Persons extends Component {

    static getDerivedStateFromProps(){
        console.log('[Persons.js] getDerivedStateFromProps')
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[Persons.js]   shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Persons.js]   getSnapshotBeforeUpdate')
    }

    render(props) {

        return (
            this.props.persons.map((person, index) => {
                return <Person name={person.name} age={person.age} key={person.id}
                    click={(index) => this.props.deleteClickHandler(index)} />
            })
        )
    }
}

export default Persons