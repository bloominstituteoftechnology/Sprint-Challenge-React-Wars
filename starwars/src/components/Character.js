import React from 'react';
import './StarWars.css';

const Character = (props) => {
  return (
    <li className='character'
        id={props.character.created}>
        <h2>{props.character.name}</h2>
        <p>{props.character.birth_year}</p>
        <p>{props.character.gender}</p>
        <p>{props.character.hair_color}</p>
        <p>{props.character.eye_color}</p>
        <p>{props.character.skin_color}</p>
        <p>{props.character.height}</p>
        <p>{props.character.mass}</p>
    </li>
  );
}

export default Character;