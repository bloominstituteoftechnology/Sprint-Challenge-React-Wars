import React from 'react';
import CharacterInfomation from './CharacterInformation.js';

const CharacterCard = (props) => {
  return (
    <div className='characterCard'>
      <h3>{props.character.name}</h3>
      <CharacterInformation details={props.character} />
    </div>
  )
}

export default CharacterCard;
