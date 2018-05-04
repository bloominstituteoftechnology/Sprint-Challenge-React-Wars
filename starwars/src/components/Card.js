import React from 'react';

const CardContainer = props => {
  return (
    <div>
      <p>{props.character.name}</p>
      <p>Gender: {props.character.gender}</p>
      <p>Height: {props.character.height}</p>
    </div>
  )
}

export default CardContainer;