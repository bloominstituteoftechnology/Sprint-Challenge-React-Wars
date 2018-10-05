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
              <span>
                <strong>Gender:</strong>
              </span>{" "}
              {char.gender}
            </p>
            <p>
              <span>
                <strong>DOB:</strong>
              </span>{" "}
              {char.birth_year}
            </p>
            <p>
              <span>
                <strong>Height:</strong>
              </span>{" "}
              {char.height}
            </p>
            <p>
              <span>
                <strong>Mass:</strong>
              </span>{" "}
              {char.mass}
            </p>
            <p>
              <span>
                <strong>Skin:</strong>
              </span>{" "}
              {char.skin_color}
            </p>
            <p>
              <span>
                <strong>Hair:</strong>
              </span>{" "}
              {char.hair_color}
            </p>
            <p>
              <span>
                <strong>Eyes:</strong>
              </span>{" "}
              {char.eye_color}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CardContainer;
