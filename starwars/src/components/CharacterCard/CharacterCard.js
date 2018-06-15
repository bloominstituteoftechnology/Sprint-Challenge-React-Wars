import React from 'react';
import './CharacterCard.css';
import CharacterCardHeader from './CharacterCardHeader';
import CharacterCardDetailList from './CharacterCardDetailList';

const CharacterCard = props => {
  return(
    <li className="character-card">
      <CharacterCardHeader name={props.characterData.name} />
      <CharacterCardDetailList characterData={props.characterData} />
    </li>
  );
};

export default CharacterCard;