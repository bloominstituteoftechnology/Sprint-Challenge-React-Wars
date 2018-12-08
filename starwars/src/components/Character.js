import React from 'react';
import './StarWars.css';

const Character = (props) => {
  return (
    <div>
      <div>Name: {props.char.name}</div>
      <div>D.O.B.: {props.char.birth_year}</div>
      <div>Gender: {props.char.gender}</div>
      <div>Height: {props.char.height}</div>
      <div>Mass: {props.char.mass}</div>
      <div>Hair Color: {props.char.hair_color}</div>
      <div>Eye Color: {props.char.eye_color}</div>
      <div>Skin Color: {props.char.skin_color}</div>
    </div>
  );
};

export default Character;
