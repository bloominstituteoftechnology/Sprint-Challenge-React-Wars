import React from 'react';
import './CharacterCard.css';

const CharacterCard = ({starwarsChar}) => {
  return(
      <div className: "card-box">
        <div className: "names"> name: {starwarsChar.name} </div>
        <div className: "facts"> birth year: {starwarsChar.birth_year} </div>
        <div className: "facts"> height: {starwarsChar.height} </div>
      </div>
  );
}

export default CharacterCard;