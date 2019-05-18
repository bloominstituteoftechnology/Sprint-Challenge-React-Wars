import React from 'react';
import './StarWars.css';

const Character = (props) => {
  const { character } = props;

  return (
    <div className="charCard">
      <h2>{character.name}</h2>
      <p><span>Birth Year:</span>{character.birth_year}</p>
      <p><span>Date Created: </span>{character.created}</p>
      <p><span>Date Edited: </span>{character.edited}</p>
      <p><span>Gender: </span>{character.gender}</p>
      <p><span>Mass: </span>{character.mass}</p>
      <p><span>Hair Color: </span>{character.hair_color}</p>
      <p><span>Eye Color: </span>{character.eye_color}</p>
      <p><span>Skin Color: </span>{character.skin_color}</p>
      <p><span>Height: </span>{character.height}</p>
      <p><span>Homeworld: </span>{character.homeworld}</p>
      <p><span>URL: </span>{character.url}</p>
    </div>
  );
}

export default Character;