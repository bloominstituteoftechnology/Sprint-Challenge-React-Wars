import React from 'react';
import './StarWars.css';

const Character = (props) => {
  const { bio } = props;
  return (
    <div className="character-card">
      <h1>{bio.name}</h1>
      <p>Birth Year: {bio.birth_year}</p>
      <p>Height: {bio.height}</p>
      <p>Mass: {bio.mass}</p>
      <p>Gender: {bio.gender}</p>
      <p>Hair Color: {bio.hair_color}</p>
      <p>Skin Color: {bio.eye_color}</p>
    </div>
  );
};

export default Character;
