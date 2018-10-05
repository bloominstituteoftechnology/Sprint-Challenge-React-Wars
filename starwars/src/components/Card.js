import React from 'react';
import './StarWars.css';

const Card = props => {

    return (
      <div className="profileCard">
        <p>{props.name}</p>
        <p>{props.birth_year}</p>
      </div>
    );
}


export default Card;