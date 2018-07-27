import React from 'react';
import Card from './Card';

const CardContainer = props => {
  return (
    <div className="card-container">
      {props.characters.map(character => <Card character={character} />)}
    </div>
  )
}