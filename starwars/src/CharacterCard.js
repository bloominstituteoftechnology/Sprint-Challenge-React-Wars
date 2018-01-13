import React from 'react'


const CharacterCard = (props) => {
  const character = props.character;
  const character_photo = `${character.name}.jpeg`;
  return (
    <div>
      <h1>hello galaxy</h1>
      <ul>
        <li>{character.name}</li>
        <img src= {require(`./character_images/${character_photo}`)} />
        <li>{character.gender}</li>
        <li>{character.hair_color}</li>
        <li>{character.eye_color}</li>
        <li>{character.skin_color}</li>
        <li>{character.height}</li>
        <li>{character.mass}</li>
      </ul>
      <hr />
    </div>
  );
}

export default CharacterCard;