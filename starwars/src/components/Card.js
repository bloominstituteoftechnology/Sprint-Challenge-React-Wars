import React from 'react';
import './StarWars.css';

const Card = props => {
  return (
    <div className="char-card">
      <h2>{props.char.name}</h2>
      <p>Gender: {props.char.gender !== 'n/a' ? props.char.gender : '-'}</p>
      <p>Birth Year: {props.char.birth_year}</p>
    </div>
  );
}

export default Card;