import React from 'react';


const Card = props => {
  const {
    name,
    height,
    hair_color,
    eye_color,
    birth_year,
    gender,
    homeworld,
  } = props.character;

  return (
    <div className='card'>
      <h1 className='name'>{name}</h1>
      <div className='subtitle'>
        <p>Born: {birth_year}</p>
        <p>Identifies as: {gender}</p>
      </div>
      <div className='details'>
        <p>Height: {height}</p>
        <p>Hair: {hair_color}</p>
        <p>Eyes: {eye_color}</p>
      </div>
    </div>
  )
}

export default Card;
