import React from 'react';
import './StarWars.css';

const Character = props => {
  return (
    <div className="card">
      <h2>{props.char.name}</h2>
      <p>Height: {props.char.height}</p>
      <p>Mass: {props.char.mass}</p>
    </div>
  )
}

export default Character;