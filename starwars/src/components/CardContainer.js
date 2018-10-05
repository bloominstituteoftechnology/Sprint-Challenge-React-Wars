import React from 'react';
import Card from './Card.js';
import './StarWars.css';


const CardContainer = props => {
  return (
    <div className='card-container'>
      {props.characters.map(character => <Card key={character.created} character={character} />)}
    </div>
  )
}


export default CardContainer;
