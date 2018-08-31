import React from 'react';
import './StarWars.css';
 
function Character(props) {
    return (
      <div className="character-card">
      <h3>Name: {props.char.name}</h3>
      <p>Birth Year: {props.char.birth_year}</p> 
      <p>Eye Color: {props.char.eye_color}</p>
      <p>Gender: {props.char.gender}</p> 
      <p>Height: {props.char.height}</p>
      <p>Mass: {props.char.mass}</p>
  </div> 
    );
};
 export default Character;