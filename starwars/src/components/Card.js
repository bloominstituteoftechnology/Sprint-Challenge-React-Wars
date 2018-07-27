import React from 'react';

const Card = props => {
  const {name, height, hair_color, eye_color, birth_year, gender} = props.character;

  return (
  <div>
    <h1>{name}</h1>
    <div>
      <p>{birth_year}</p>
      <p>{gender}</p>
    </div>
    <div>
      <p>{height}</p>
      <p>{hair_color}</p>
      <p>{eye_color}</p>
    </div>
  </div>
  )
}

export default Card;