import React from 'react';

const StarCard = props => {
  return (
    <div className="dataCards">
      <h2>{props.eachChar.name}</h2>
      <p>Birth year: {props.eachChar.birth_year}</p>
      <p>Gender: {props.eachChar.gender}</p>
      <p>Height: {props.eachChar.height}</p>
      <p>Mass: {props.eachChar.mass}</p>
      <p>Eye Color: {props.eachChar.eye_color}</p>
      <p>Hair Color: {props.eachChar.hair_color}</p>
    </div>
  );
};

export default StarCard;
