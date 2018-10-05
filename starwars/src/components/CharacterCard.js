import React from 'react';
import './StarWars.css'
const CharacterCard= props => {
  return (
      <div className='characterCard'>
        <div className="headline">
          <h3>{props.character.name}</h3>
        </div>
        <div className='stats'>
          <p> Gender: {props.character.gender}</p>
          <p> Mass: {props.character.mass}</p>
          <p> Eyes: {props.character.eye_color}</p>
          <p> Height: {props.character.height}</p>
        </div>
      </div>
      );
};

export default CharacterCard;
