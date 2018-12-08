import React from "react";
import './StarWars.css'

const CardContainer = props => {
  return (
    <div className="container">
      {props.charArray.map(char => (
        <div className="card">
          <h3>{char.name}</h3>
          <p>Height: {char.height}</p>
          <p>Mass: {char.mass}</p>
          <p>Hair Color: {char.hair_color}</p>
          <p>Skin Color: {char.skin_color}</p>
          <p>Eye Color: {char.eye_color}</p>
          <p>Birth Year: {char.birth_year}</p>
          <p>Gender: {char.gender}</p>
          <p>Created: {char.created.slice(0,10)}</p>
          <p>Last Edited: {char.edited.slice(0,10)}</p>
        </div>
      ))}
    </div>
  );
};

export default CardContainer;
