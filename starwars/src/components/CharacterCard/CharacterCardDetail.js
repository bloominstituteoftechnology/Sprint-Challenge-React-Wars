import React from 'react';
import './CharacterCard.css';

const CharacterCardDetail = props => {

  return(
    <li className="character-card__detail">
      <div className="character-card__detail-name">{props.detailName}</div>
      <div className="character-card__detail-value">{props.detailValue}</div>
    </li>
  );
};

export default CharacterCardDetail;