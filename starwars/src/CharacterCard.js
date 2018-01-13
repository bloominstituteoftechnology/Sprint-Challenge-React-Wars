import React from 'react'
import './CharacterCard.css';

const CharacterCard = (props) => {
  const character = props.character;
  const character_photo = `${character.name}.jpeg`;
  return (
    <div>
      <ul className="characterList">

        <div className="container">

          <h1 className="characterName">{character.name}</h1>
          <img className="photo" src= {require(`./character_images/${character_photo}`)} />

          <div className="info">

            <li>Gender: {character.gender}</li>
            <li>Hair color: {character.hair_color}</li>
            <li>Eye color: {character.eye_color}</li>
            <li>Skin tone: {character.skin_color}</li>
            <li>Height: {character.height}</li>
            <li>Mass: {character.mass}</li>
          </div>

        </div>

      </ul>
    </div>
  );
}

export default CharacterCard;