import React from 'react';
import './StarWars.css';

const Card = props => {
  return (
    <div className="card">
      <h2>{props.character.name}</h2>
      <p>Born: <time>{props.character.birth_year}</time></p>
      <p>Gender: {props.character.gender}</p>
      <p>Skin Color: {props.character.skin_color}</p>
      <p>Hair Color: {props.character.hair_color}</p>
      <p>Eye Color: {props.character.eye_color}</p>
      <p>Height: {props.character.height}</p>
      <p>Mass: {props.character.mass}</p>
    </div>
  );
};

export default Card;