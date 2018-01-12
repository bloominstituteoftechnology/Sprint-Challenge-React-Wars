import React from 'react';
import './PlayerCard.css';

const PlayerCard = (props) => {
  {if (!props.character) {
    props.character.name = 'loading'
  }}
  return (
    <div>
      {console.log(props.character)}
      {props.character.map((PlayerCard, i) => {
        return (
          <div key={i}>
            <h1>{PlayerCard.name}</h1>
            <h4>Hair: {PlayerCard.hair_color} Eyes: {PlayerCard.eye_color}</h4>
            <h4>Height: {PlayerCard.height / 100}m </h4>
          </div>
        )
      })}
    </div>
  )
}

export default PlayerCard;

