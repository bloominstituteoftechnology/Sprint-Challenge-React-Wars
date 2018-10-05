import React from "react";
import "./StarWars.css";

const CardContainer = props => {
  return (
    <div className="card">
      {props.starwars.map(char => {
        return (
          <div className="character">
            <h2>{char.name}</h2>
            <p>
              <strong>Gender: </strong>
              {char.gender}
            </p>
            <p>
              <strong>DOB: </strong>
              {char.birth_year}
            </p>
            <p>
              <strong>Height: </strong>
              {char.height}
            </p>
            <p>
              <strong>Mass: </strong>
              {char.mass}
            </p>
            <p>
              <strong>Skin: </strong>
              {char.skin_color}
            </p>
            <p>
              <strong>Hair: </strong>
              {char.hair_color}
            </p>
            <p>
              <strong>Eyes: </strong>
              {char.eye_color}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CardContainer;
