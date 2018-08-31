import React from 'react';
import './StarWars.css';

const Character = (props) => {
  return (
    <li className = 'character' id = {props.character.created}>
      <h3>{props.character.name}</h3>
        <p>Birth year: {props.character.birth_year}</p>
        <p>Gender: {props.character.gender}</p>
        <p>Hair color: {props.character.hair_color}</p>
        <p>Eye color: {props.character.eye_color}</p>
        <p>Skin color: {props.character.skin_color}</p>
        <p>Height: {props.character.height}</p>
        <p>Mass: {props.character.mass}</p>
    </li>
  );
}

export default Character;
