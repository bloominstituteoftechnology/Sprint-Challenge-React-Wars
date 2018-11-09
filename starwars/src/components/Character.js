import React from "react";

const Character = props => {
  return <div className="character-card">
    <h1>{props.characterDetails.name}</h1>
    <div className="character-card-info">
      <p>Height: {props.characterDetails.height}</p>
      <p>Mass: {props.characterDetails.mass}</p>
      <p>Hair Color: {props.characterDetails.hair_color}</p>
      <p>Skin Color: {props.characterDetails.skin_color}</p>
      <p>Eye Color: {props.characterDetails.eye_color}</p>
      <p>Birth Year: {props.characterDetails.birth_year}</p>
      <p>Gender: {props.characterDetails.gender}</p>
    </div>
  </div>
};

export default Character;