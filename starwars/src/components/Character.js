import React from 'react';
import './StarWars.css';

const Character = (props) => {
  const { bio } = props;
  return (
    <div className="character-card">
      <h1>{bio.name}</h1>
      <div className="info-container">
        <p>Birth Year: {bio.birth_year}</p>
        <p>Height: {bio.height}</p>
        <p>Mass: {bio.mass}</p>
        <p>Gender: {bio.gender}</p>
        <p>Hair Color: {bio.hair_color}</p>
        <p>Skin Color: {bio.eye_color}</p>
      </div>
      <div className="logo-container">
        <img src="https://cdn2.iconfinder.com/data/icons/space-82/64/death-star-512.png" alt="death star" />
      </div>
    </div>
  );
};

export default Character;
