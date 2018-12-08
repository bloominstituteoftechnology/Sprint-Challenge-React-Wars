import React from 'react';
import './StarWars.css';

const Character = (props) => {
  const { character } = props;
  console.log(props);

  return (
    <div className="card">
      <h3>{character && character.name}</h3>
    </div>
  );
}

export default Character;