import React from 'react';
import CharInfo from './CharInfo.js';

const CharCard = (props) => {
  return (
    <div>
      <h3>{props.character.name}</h3>
      <CharInfo facts={props.character} />
    </div>
  )
}

export default CharCard;
