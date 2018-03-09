import React from 'react';
import './Card.css';

const Card = props => {
  return (
    <div className="Char-Wrapper">
      <div className="Card">
        <h3 className="CharName">{props.char.name}</h3>
        <p className="CharInfo">
          <span>Height: </span> {props.char.height}
        </p>
        <p className="CharInfo">
          <span>Eye Color: </span> {props.char.eye_color}
        </p>
        <p className="CharInfo">
          <span>Birth Year: </span> {props.char.birth_year}
        </p>
      </div>
    </div>
  );
};

export default Card;
