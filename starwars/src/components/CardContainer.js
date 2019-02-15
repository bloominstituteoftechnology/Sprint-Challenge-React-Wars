import React from 'react';
import Card from './Card.js';
import './StarWars.css';


const CardContainer = props => {

  let classes = 'previous';
  if (!props.previousData){
    classes += ' empty';
  }

  let nextClasses = 'next';
  if (!props.nextData){
    nextClasses += ' empty';
  }
  return (
    <div className='card-container'>
      <button className={classes} onClick={props.getPrevious}>
        <i className='fas fa-arrow-circle-left' />
      </button>
      <button className={nextClasses} onClick={props.getNext}>
        <i className='fas fa-arrow-circle-right'/>
      </button>
      {props.characters.map(character => <Card key={character.created} character={character} />)}
    </div>
  )
}


export default CardContainer;
