import React from 'react';

const CharacterInformation = (props) => {
  return (
    <div className='characterInformation'>
      <ul>
        <li>Gender: {props.details.gender}</li>
        <li>Birth Year:{props.details.birth_year}</li>
        <li>Height: {props.details.height} cm</li>
        <li>Weight: {props.details.mass} kg</li>
        <li>Eye Color: {props.details.eye_color}</li>
        <li>Hair Color: {props.details.hair_color}</li>
        <li>Skin Color: {props.details.skin_color}</li>
      </ul>
    </div>
  )
}

export default CharacterInformation;
