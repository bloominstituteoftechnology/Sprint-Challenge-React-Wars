import React from 'react';
import './Card.css';


const Card = props => {
  return (
    <li className="starwars-card">
      <h4>Character Name: {props.charInfo.name}</h4>
      <p>Species: {props.charInfo.species}</p>
      <p>Gender: {props.charInfo.gender}</p>
      <p>Hair Color: {props.charInfo.hair_color}</p>
      <p>Home World: {props.charInfo.homeworld}</p>
      <p>Birth Year: {props.charInfo.birth_year}</p>
      <p>Star Ships: {props.charInfo.starships}</p>
      <p>Vehicles: {props.charInfo.vehicles}</p>
      <p>Mass: {props.charInfo.mass}</p>
      <p>Skin color: {props.charInfo.skin_color}</p>
      <p>Birth Year: {props.charInfo.birth_year}</p>
      <p>Films: {props.charInfo.films}</p>
      <p>Created: {props.charInfo.created}</p>
      <p>Edited: {props.charInfo.edited}</p>
      <p>Eye Color: {props.charInfo.eye_color}</p>
      <p>Height: {props.charInfo.height}</p>
      <p>URL: {props.charInfo.url}</p>
    </li>
  );
}

export default Card;
