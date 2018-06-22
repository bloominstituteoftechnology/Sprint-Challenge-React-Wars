import React from 'react';
import './StarWars.css';
import Person from './Person.js';

const PersonList = props => {
  return(
    <div className="cards-wrapper">
      {props.people.map(person => (
        <Person
          name={person.name}
          height={person.height}
          mass={person.mass}
          hairColor={person.hair_color}
          skinColor={person.skin_color}
          eyeColor={person.eye_color}
          birthYear={person.birth_year}
          gender={person.gender}
        />
      ))}
    </div>
  )

}
export default PersonList;
