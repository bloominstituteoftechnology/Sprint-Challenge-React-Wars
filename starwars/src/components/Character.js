import React from 'react';
import './StarWars.css';

const Character = props => {
  return (
    <div className = 'char'>
    <h2>{props.character.name}</h2>
    <li>{props.character.gender}</li>
    <li>{props.character.birth_year}</li>
    <li>{props.character.height}</li>
    <li>{props.character.mass}</li>
    <li>{props.character.skin_color}</li>
    <li>{props.character.hair_color}</li>
    <li>{props.character.eye_color}</li>
    </div>
  );
};


export default Character;
