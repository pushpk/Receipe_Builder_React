import React from 'react';
import Person from './Person/Person'

const Persons = (props) => 
{
    return (
 props.persons.map((person, index) => {
              return <Person name={person.name} age= {person.age} key={person.id} 
              click={ (index) => props.deleteClickHandler(index)} />
 }

));
}

export default Persons