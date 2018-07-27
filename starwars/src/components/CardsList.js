import React from 'react';
import Card from './Card.js';
import './StarWars.css';

const CardsList = (props) => {
  let charsList = props.array.map(card => <Card name={card.name} birthyear={card.birth_year} gender={card.gender} eyecolor={card.eye_color} haircolor={card.hair_color} skincolor={card.skin_color} mass={card.mass} height={card.height} show={card.show} key={card.created} />)
  return (
    <div>
      {charsList}
    </div>
  )
};

export default CardsList;
