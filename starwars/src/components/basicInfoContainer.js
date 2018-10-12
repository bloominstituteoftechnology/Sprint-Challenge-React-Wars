import React from 'react';
import './StarWars.css';

const BasicInfoContainer = props =>
{
  return (
    <div className = "Basic-Holder">
      { props.person.name }
      <p>{ props.person.height }</p>
      <p>{ props.person.mass }</p>
      <p>{ props.person.hair_color }</p>
      <p>{ props.person.skin_color }</p>
      <p>{ props.person.eye_color }</p>
      <p>{ props.person.birth_year }</p>
      <p>{ props.person.gender }</p>
    </div>
  )
}

export default BasicInfoContainer;