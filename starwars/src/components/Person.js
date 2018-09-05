import React from 'react';
import './StarWars.css';

const Person = props => {
  return(
    <div className="card-wrapper">
      <h2>{props.name}</h2>
      <p>height: {props.height}</p>
      <p>mass: {props.mass}</p>
      <p>hair color: {props.hairColor}</p>
      <p>skin color: {props.skinColor}</p>
      <p>eye color: {props.eyeColor}</p>
      <p>birth year: {props.birthYear}</p>
      <p>gender: {props.gender}</p>
    </div>
  )
}
export default Person
