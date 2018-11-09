import React from 'react';
import './StarWars.css'

function CardCharacter(props) {
  console.log(props.character, 'in card character')
  return (
    <div className={`character`}>
      <img src={'https://banner2.kisspng.com/20180206/vtq/kisspng-luke-skywalker-anakin-skywalker-drawing-star-wars-luke-skywalker-transparent-background-5a7a21bb24d333.5712049415179534671508.jpg'}/>
      <h1 className={`character-name`}>{props.character.name}</h1>
      <p>birth year: {props.character.birth_year}</p>
      <p>eye color: {props.character.eye_color}</p>
      <p>height: {props.character.height}</p>
      <p>gender: {props.character.gender}</p>
      <p>hair color: {props.character.hair_color}</p>
      <p>mass: {props.character.mass}</p>
      <p>skin color: {props.character.skin_color}</p>

    </div>  
  )
}

export default CardCharacter;
