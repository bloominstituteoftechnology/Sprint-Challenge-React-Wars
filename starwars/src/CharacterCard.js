import React from 'react';
//import './CharacterCard.css';

const CharacterCard = props => {
  return (
    <div className="CharacterCard">
      {console.log(props)}
      <p>Name: {props.character.name}</p>
      <p>Height: {props.character.height}</p>
      <p>Mass: {props.character.mass}</p>
      <p>Hair color: {props.character.hair_color}</p>
      <p>Skin color: {props.character.skin_color}</p>
    </div>
  )
}

export default CharacterCard;
