import React from 'react';
import './StarWars.css';

const Character = (props) => {
  return (
    <div className="character">
      <h2>{props.character.name}</h2>
      <p>Birth Year: {props.character.birth_year}</p>
      <p>Height: {props.character.height}</p>
      <p>Mass: {props.character.mass}</p>
      <p>Gender: {props.character.gender}</p>
      <p>Hair Color: {props.character.hair_color}</p>
      <p>Eye Color: {props.character.eye_color}</p>
      <p>Skin Color: {props.character.skin_color}</p>
    </div>
  );
};

export default Character;

// name
// birth_year
// height
// mass
// gender
// hair_color
// eye_color
// skin_color
