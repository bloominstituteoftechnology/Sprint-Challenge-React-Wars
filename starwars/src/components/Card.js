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
      <p>Birth Year: {props.charInfo.birth_year}</p>
    </li>
  );
}

export default Card;
