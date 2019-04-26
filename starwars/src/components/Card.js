import React from 'react';
import './StarWars.css';

const Card = props => {

    return (
      <div className="profileCard">
        <p className="characterName">{props.name}</p>
        <p> <span className="infoLabel">Date of Birth: </span>{props.birth_year}</p>
      </div>
    );
}


export default Card;