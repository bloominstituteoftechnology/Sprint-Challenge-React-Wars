import React from 'react';
import './StarWars.css'
const CharacterCard= props => {
  return (
      <p className='characterCard'>
        {console.log(props)}
        {props.character.name}
      </p>
      );
};

export default CharacterCard;
