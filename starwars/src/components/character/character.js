import React from 'react';
import StarWars from '../StarWars.css';

const Character = props => {
  return (
    <div className="container-card">
      <h1>{props.char.name}</h1>
    </div>
  );
};


export default Character;
