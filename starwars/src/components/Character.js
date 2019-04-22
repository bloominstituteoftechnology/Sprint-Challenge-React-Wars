import React from 'react';
import './StarWars.css';

const Character = (props) => {
  return (
    <div className="character">
      <div>Name: {props.character.name}</div>
      <div>Gender: {props.character.gender}</div>
      <div>Hair Color: {props.character.hair_color}</div>
      <div>Eyes: {props.character.eye_color}</div>
      <div>Height: {props.character.height} cm</div>
      <div>Mass: {props.character.mass} kg</div>
    </div>
  )
}

export default Character;