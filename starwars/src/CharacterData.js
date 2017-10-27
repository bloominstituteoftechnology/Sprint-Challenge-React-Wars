import React from 'react';
import './CharacterData.css';

const CharacterData = (props) => {
  return (
    <div className="characters">
      {
        props.characters.map((character) => {
          return (<div className="character">
            <h3>{character.name}</h3>
            <p>Birth Year: {character.birth_year}</p>
            <p>Eye Color: {character.eye_color}</p>
            <p>Gender: {character.gender}</p>
            <p>Hair Color: {character.hair_color}</p>
            <p>Height: {character.height}</p>
            <p>Weight: {character.mass}</p>
            <p>Skin Color: {character.skin_color}</p>
          </div>)  
        })
      }
    </div>
  );
}

export default CharacterData;