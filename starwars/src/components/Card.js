import React from 'react';

const Card = props => {
  return (
    <div className="card">
      <h2>{props.characterInfo.name}</h2>
      <h3>Personal Information</h3>
      <p>Name: {props.characterInfo.name}</p>
      <p>Year of Birth: {props.characterInfo.birth_year}</p>
      <h3>Physical Traits</h3>
      <p>Gender: {props.characterInfo.gender}</p>
      <p>
        Height: {props.characterInfo.height}
        cm
      </p>
      <p>
        Mass: {props.characterInfo.mass}
        kg
      </p>
      <p>Skin Color: {props.characterInfo.skin_color}</p>
      <p>Hair Color: {props.characterInfo.hair_color}</p>
      <p>Eye Color: {props.characterInfo.eye_color}</p>
    </div>
  );
};

export default Card;
