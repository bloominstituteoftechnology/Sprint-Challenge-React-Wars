import React from 'react';
import './Card.css';

const Card = props => {
  return (
    <div className="overall-container">
      <h3 className="name">{props.name.toUpperCase()}</h3>
      <div className="stat-container">
        <div className="stat-group">
          <p>Gender: {props.gender}</p>
          <p>Mass: {props.mass}</p>
          <p>Height: {props.height}</p>
        </div>
        <div className="stat-group">
          <p>Eye Color: {props.eye_color}</p>
          <p>Hair Color: {props.hair_color}</p>
          <p>Skin Color: {props.skin_color}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;