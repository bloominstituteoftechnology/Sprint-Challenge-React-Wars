import React from 'react';

const Character = props => {
  return (
    <div className="Character">
      <h3 className="CharacterName">{props.character.name}</h3>
      <h4>Born: {props.character.birth_year}</h4>
      <h4>Gender: {props.character.eye_color}</h4>
      <h4>Height: {props.character.height}</h4>
      <h4>Mass: {props.character.mass}</h4>
    </div>
  )
}

export default Character;