import React from 'react';
import "./InfoCard.css";

const InfoCard = props => {
  const character = props.character;

  return (
    <div className="InfoCard">
      Name: {character.name} <br />
      Gender: {character.gender} <br />
      Skin Color: {character.skin_color} <br />
      Eye Color: {character.eye_color} <br />
      Hair Color: {character.hair_color} <br />
      Birth Year: {character.birth_year} <br /> 
    </div>
  )
}

export default InfoCard;