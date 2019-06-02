import React from "react";
import "./StarWars.css";

const Character = props => {
  return (
    <div>
      <div className="character-card title">
        <div className="character-stats">
          <h2 className="character-name">{props.character.name}</h2>
          <p>
            <span className="bold-span">Birth Year:</span>
            {props.character.birth_year}
          </p>
          <p>
            <span className="bold-span">Gender:</span> {props.character.gender}
          </p>
          <p>
            <span className="bold-span">Hair Color:</span>{" "}
            {props.character.hair_color}
          </p>
          <p>
            <span className="bold-span">Height:</span> {props.character.height}
          </p>
          <p>
            <span className="bold-span">Mass:</span> {props.character.mass}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Character;