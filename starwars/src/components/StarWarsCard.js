import React from 'react';
import './StarWars.css';


const StarWarsCard = props => {
  return (
    <div className="card">
      <h2>{props.char.name}</h2>
      <p>Birth-year: {props.char.birth_year}</p>
      <p>Gender: {props.char.gender}</p>
      <p>Height: {props.char.height}</p>
      <p>Weight: {props.char.mass}</p>
      <p>Hair color: {props.char.hair_color}</p>
      <p>Eye color: {props.char.eye_color}</p>
      <p>Skin color: {props.char.skin_color}</p>
    </div>
  )
}

export default StarWarsCard;