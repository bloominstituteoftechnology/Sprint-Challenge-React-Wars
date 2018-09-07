import React from 'react';
import './StarWars.css';

const CharCard = props => {
  return (
    <div className="char-card">
      <div className="char-info">{props.char.name}</div>
      <div className="char-info">{props.char.birth_year}</div>
      <div className="char-info">{props.char.gender}</div>
    </div>
  );
};

export default CharCard;
