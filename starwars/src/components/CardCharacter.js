import React from 'react';
import './StarWars.css'

function CardCharacter(props) {
  console.log(props.character, 'in card character')
  return (
    <div className={`character`}>
      <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIMrXCq8FXWe7yBfw0fE3uhsU4xo3pnSIInGUXWTgXUVICytoxlA'}/>
      <h1 className={`character-name`}>{props.character.name}</h1>
      <p>birth year: {props.character.birth_year}</p>
      <p>eye color: {props.character.eye_color}</p>
      <p>hair color: {props.character.hair_color}</p>
      <p>skin color: {props.character.skin_color}</p>
      <p>gender: {props.character.gender}</p>
      <p>height: {props.character.height}</p>
      <p>mass: {props.character.mass}</p>

    </div>  
  )
}

export default CardCharacter;
