import React from 'react';
import Card from './Card';
import './StarWars.css';

const CardContainer = props => {
  return (
    <div className="card-container">
      {props.characters.map(character => <Card character={character} />)}
    </div>
  )
}

export default CardContainer;