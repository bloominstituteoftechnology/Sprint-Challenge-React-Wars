import React from 'react';
import Card from './Card.js';
import './StarWars.css';

const CardsList = (props) => {
  let charsList = props.array.map(card => <Card char={card} key={card.name} show={card.show} />)
  return (
    <div>
      {charsList}
    </div>
  )
};

export default CardsList;
