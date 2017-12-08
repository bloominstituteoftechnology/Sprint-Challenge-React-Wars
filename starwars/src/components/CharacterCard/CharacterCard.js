import React from 'react';
import './CharacterCard.css';

const CharacterCard = (props) => {

  return(
    <div className="Character">
      <div className="Character__name">{props.name}</div>
    </div>
  );
};

export default CharacterCard;