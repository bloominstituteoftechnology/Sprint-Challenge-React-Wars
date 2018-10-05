import React from 'react';
import CharacterInformation from './CharacterInformation.js';

const CharacterCard = (props) => {
  return (
    <div className='characterCard'>
      <h3 className='characterName'>{props.character.name}</h3>
      <CharacterInformation details={props.character} />
    </div>
  )
}

export default CharacterCard;
