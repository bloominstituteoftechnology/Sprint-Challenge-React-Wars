import React from "react";
import Homeworld from "./Homeworld";

const Character = props => {
  return (
    <div className="character-card">
      <h3>{props.characterDetails.name}</h3>
      <div className="character-card-info">
        <p>Height: {props.characterDetails.height}</p>
        <p>Mass: {props.characterDetails.mass}</p>
        <p>Hair Color: {props.characterDetails.hair_color}</p>
        <p>Skin Color: {props.characterDetails.skin_color}</p>
        <p>Eye Color: {props.characterDetails.eye_color}</p>
        <p>Birth Year: {props.characterDetails.birth_year}</p>
        <p>Gender: {props.characterDetails.gender}</p>
      </div>
      {Object.keys(props.characterDetails).includes("homeworldObj") ? (
        <div className="character-homeworld">
          <Homeworld
            key={props.characterDetails.homeworldObj.name}
            homeworld={props.characterDetails.homeworldObj}
          />
        </div>
      ) : (
        <div className="character-homeworld">
          <h4>Homeworld</h4>
          <p>None</p>
        </div>
      )}
    </div>
  );
};

export default Character;
