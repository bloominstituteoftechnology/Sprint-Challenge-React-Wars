import React from 'react';
import './StarWars.css';

const Card = props => {
  const character = props.character;
  console.log(character)
  return (
    <div className="Card">
      <h1> {character.name} </h1>

      <h2> Profile: </h2>
      <p> <span>Birth Year:</span> {character.birth_year}</p>
      <p> <span>Gender:</span> {character.gender.charAt(0).toUpperCase() + character.gender.slice(1)}</p>
      <p> <span>Height:</span> {character.height}</p>
      <p> <span>Eye Color:</span> {character.eye_color.charAt(0).toUpperCase() + character.eye_color.slice(1)}</p>
      <p> <span>Hair Color:</span> {character.hair_color.charAt(0).toUpperCase() + character.hair_color.slice(1)}</p>
      <p> <span>Skin Color:</span> {character.skin_color.charAt(0).toUpperCase() + character.skin_color.slice(1)}</p>
      <p><span>Mass:</span> {character.mass}</p>


    </div>
  );
}

export default Card;
