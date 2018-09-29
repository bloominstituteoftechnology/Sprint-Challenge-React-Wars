import React from 'react';

const CharInfo = (props) => {
  return (
    <div className='charInfo'>
      <ul>
        <li>{props.facts.gender}</li>
        <li>{props.facts.birth_year}</li>
        <li>{props.facts.height} cm</li>
        <li>{props.facts.mass} kg</li>
        <li>{props.facts.eye_color}</li>
        <li>{props.facts.hair_color}</li>
        <li>{props.facts.skin_color}</li>
      </ul>
    </div>
  )
}

export default CharInfo;
