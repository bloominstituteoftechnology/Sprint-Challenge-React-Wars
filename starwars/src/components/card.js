import React from "react";
import "./StarWars.css";

const Card = props => {
  return (
    <div className="card-container">
      {props.data.map(character => {
        return (
          <div className="card">
            <p>
              Name:
              {character.name}
            </p>
            <br />
            <p>
              {" "}
              Eye Color:
              {character.eye_color}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
