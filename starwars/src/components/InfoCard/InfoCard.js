import React from 'react';
import "./InfoCard.css";

const InfoCard = props => {
  const character = props.character;

  return (
    <div className="InfoCard">
      <div className="InfoCard Name">
        {character.name}
      </div>
      SPECIES: {character.species} <br />
      GENDER: {character.gender} <br />
      SKIN COLOR: {character.skin_color} <br />
      EYE COLOR: {character.eye_color} <br />
      HAIR COLOR: {character.hair_color} <br />
      HEIGHT: {character.height} <br />
      MASS: {character.mass} <br />
      BIRTH YEAR: {character.birth_year} <br /> 
    </div>
  )
}

export default InfoCard;