import React from "react";
import "./StarWars.css";

const StarWars = props => {
  return (
    <div className="container">
      {props.starwars.map(characters => (
        <div className="character-cards">
          <h1 className="names">{characters.name}</h1>
          <ul>
            <li>Height: {characters.height}</li>
            <li>Mass: {characters.mass}</li>
            <li>Hair Color: {characters.hair_color}</li>
            <li>Skin Color: {characters.skin_color}</li>
            <li>Eye Color: {characters.eye_color}</li>
            <li>Birth Year: {characters.birth_year}</li>
            <li>Gender: {characters.gender}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default StarWars;
