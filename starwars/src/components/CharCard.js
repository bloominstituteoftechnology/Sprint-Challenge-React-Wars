
import React from "react";

const CharCard = props => {
  return (
    <div className="character-card-container">
      <div className="character-card">
        <h1>{props.character.name}</h1>
        <ul>
          <li>Birth year: {props.character.birth_year}</li>
          <li>Gender: {props.character.gender}</li>
          <li>Eye color: {props.character.eye_color}</li>
          <li>Height: {props.character.height}</li>
          <li>Mass: {props.character.mass}</li>
          <li>Skin color: {props.character.skin_color}</li>
        </ul>
      </div>
      <div className="return" onClick={props.returnToList}>Return to list</div>
    </div>

  );
};

export default CharCard;