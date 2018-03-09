import React from 'react';
import './Card.css';

const Card = props => {
  return (
    <div className="Char-Wrapper">
      <div className="Card">
        <h3 className="CharName">{props.char.name}</h3>
        <p className="CharInfo">Height: {props.char.height}</p>
        <p className="CharInfo">Eye Color: {props.char.eye_color}</p>
        <p className="CharInfo">Birth Year: {props.char.birth_year}</p>
      </div>
    </div>
  );
};

export default Card;
