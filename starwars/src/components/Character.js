import React from 'react';
import './StarWars.css';

const Character = (props) => {
  return (
    <div>
      <div>Name: {props.chars.name}</div>
      <div>D.O.B.: {props.chars.birth_year}</div>
      <div>Gender: {props.chars.gender}</div>
      <div>Height: {props.chars.height}</div>
      <div>Mass: {props.chars.mass}</div>
      <div>Hair Color: {props.chars.hair_color}</div>
      <div>Eye Color: {props.chars.eye_color}</div>
      <div>Skin Color: {props.chars.skin_color}</div>
    </div>
  );
};

export default Character;
