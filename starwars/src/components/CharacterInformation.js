import React from 'react';

const CharacterInformation = (props) => {
  return (
    <div className='characterInformation'>
      <ul>
        <li>Gender: {props.facts.gender}</li>
        <li>Birth Year:{props.facts.birth_year}</li>
        <li>Height: {props.facts.height} cm</li>
        <li>Weight: {props.facts.mass} kg</li>
        <li>Eye Color: {props.facts.eye_color}</li>
        <li>Hair Color: {props.facts.hair_color}</li>
        <li>Skin Color: {props.facts.skin_color}</li>
      </ul>
    </div>
  )
}

export default CharacterInformation;
