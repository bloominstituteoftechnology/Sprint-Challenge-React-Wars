import React from 'react';
import Card from './Card.js';

const CardsList = (props) => {
  return (
    <div>
      <props.array.map(card => <Card name='card.name' birthyear='card.birth_year' gender='card.gender' species='card.species' eyecolor='card.eye_color' haircolor='card.hair_color' skincolor='card.skin_color' mass='card.mass' height='card.height'/>)
    </div>
  )
};

export default CardsList;
