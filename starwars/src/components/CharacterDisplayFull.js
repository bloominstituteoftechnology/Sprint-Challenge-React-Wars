import React from 'react';
import './StarWars.css';

const CharacterDisplayFull = props => {
  return(
    <div className="character-full">
      <div className="character-name">Name: {props.character.name}</div>
      <div className="character-birthyear">Born: {props.character.birth_year}</div>
      <div className="character-height">Height: {props.character.height}</div>
      <div className="character-mass">Mass: {props.character.mass}</div>
      <div className="character-gender">Gender: {props.character.gender}</div>
      <div className="character-eye-color">Ocular Coloration: {props.character.eye_color}</div>
      <div className="character-colors">Body Coloration: {props.character.skin_color}</div>
      <div className="btn deslect-btn" onClick={props.deselectChar}> 'RETURN' </div>
    </div>
  );
};

export default CharacterDisplayFull;
