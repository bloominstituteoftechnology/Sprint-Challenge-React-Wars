import React from 'react';
import './StarWars.css';

const Character = (props) => {
  const { character } = props;

  return (
    <div className="card">
      <h3>{character && character.name}</h3>
      <p>{character && character.birth_year}</p>
      <p>{character && character.hair_color}</p>
      <p>{character && character.eye_color}</p>
      <p>{character && character.gender}</p>
      <p>{character && character.mass}</p>
      <p>{character && character.skin_color}</p>
      <p>{character && character.created}</p>
      <p>{character && character.edited}</p>
      <p>{character && character.height}</p>
      <p>{character && character.homeworld}</p>
      <p>{character && character.url}</p>
    </div>
  );
}

export default Character;