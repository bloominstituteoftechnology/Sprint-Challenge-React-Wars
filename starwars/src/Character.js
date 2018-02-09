import React from 'react';

function Character(props) {

  return(
      <div className='char'>
        <div className='bio'>
          <p>Birth Year: {props.character.birth_year}</p>
          <p>Gender: {props.character.gender}</p>
          <p>Weight (kg): {props.character.mass}</p>
          <p>Height (cm): {props.character.height}</p>
          <p>Eye Color: {props.character.eye_color}</p>
          <p>Hair Color: {props.character.hair_color}</p>
        </div>
        <h1>{props.character.name}</h1>
      </div>
  )
}

export default Character;