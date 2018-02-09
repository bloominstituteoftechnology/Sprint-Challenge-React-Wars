import React, { Component } from 'react';
//<div>{height}{mass}{eye_color}{hair_color}{skin_color}{gender}</div>

let Card = (props) => {
  return (
    <div className="card">
      <div>{props.character.name}</div>
      <div>{props.character.height}cm, {props.character.mass}kgs, {props.character.gender}</div>
      <div>Hair Color: {props.character.hair_color}</div>
      <div>Eye Color: {props.character.eye_color}</div>
      <div>Skin Color: {props.character.skin_color}</div>
      <div>Born: {props.character.birth_year}</div>

    </div>
  );
}

export default Card;