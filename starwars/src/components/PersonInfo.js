import React from 'react';
import './StarWars.css';

const PersonInfo = ({person}) => {
    return (
        <div className="person">
          {/* <img src={person.url} alt=""/> */}
          <h2>{person.name}</h2>
          <h3>Birth Year: {person.birth_year}</h3>
          <h3>Height: {person.height}</h3>
          <h3>Weight: {person.mass}kgs</h3>
          <h3>Eye Color: {person.eye_color}</h3>
          <h3> Hair Color: {person.hair_color} </h3>
        </div>
    );
}

export default PersonInfo;
