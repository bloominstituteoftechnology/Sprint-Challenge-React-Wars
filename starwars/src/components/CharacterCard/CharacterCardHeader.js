import React from 'react';
import './CharacterCard.css';

const CharacterCardHeader = props => {
  return <div className="character-card__header">{props.name}</div>;
};

export default CharacterCardHeader;