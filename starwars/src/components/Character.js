import React from 'react';

const Character = props => {
  return (
    <div>
      <h1>React Wars</h1>
      <h2>Name: {props.character.name}</h2>
      <h2>Birth Year: {props.character.birth_year}</h2>
      <h2>Eye Color: {props.character.eye_color}</h2>
    </div>
  );
};

export default Character;
