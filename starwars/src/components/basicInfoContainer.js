import React from 'react';
import './StarWars.css';

const BasicInfoContainer = props =>
{
  return (
    <div className = "Basic-Holder">
      <p>Name: { props.person.name }</p>
      <p>Height: { props.person.height }</p>
      <p>Mass: { props.person.mass }</p>
      <p>Hair Color: { props.person.hair_color }</p>
      <p>Skin Color: { props.person.skin_color }</p>
      <p>Eye Color: { props.person.eye_color }</p>
      <p>Birth Year: { props.person.birth_year }</p>
      <p>Gender: { props.person.gender }</p>
    </div>
  )
}

export default BasicInfoContainer;