import React from 'react';
import CardCharacter from './CardCharacter.js'

function Card(props) {
  console.log(props.testState, 'in card')
  return (
    <div className={`card-container`}>
      {props.testState.map( (swCharacter, index) => {
        return <CardCharacter key={index} character={swCharacter} />
      })}
    </div>
    
  )
}

export default Card;