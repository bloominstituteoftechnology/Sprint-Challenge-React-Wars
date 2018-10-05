import React from 'react';
import './StarWars.css'

const Characters = props => {
  return <div className="card">
      <h2>{props.starwarsChars.name}</h2>
      <p>Birth Year: {props.starwarsChars.birth_year}</p>
      <p>Gender: {props.starwarsChars.gender}</p>
      <p>Skin Color: {props.starwarsChars.skin_color}</p>
      <p>Hair Color: {props.starwarsChars.hair_color}</p>
      <p>Eye Color: {props.starwarsChars.eye_color}</p>
      <p>Height: {props.starwarsChars.height}</p>
      <p>Mass: {props.starwarsChars.mass}</p>
      
    </div>;
}

export default Characters;

