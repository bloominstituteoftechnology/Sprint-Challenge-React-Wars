import React from "react";
import "./StarWars.css";

const CharsList = props => {
  return (
    <div>
      {props.chars.map(char => {
        return (
          <div className="note">
            <div>Name: {char.name}</div>
            <div>Height: {char.height}</div>
          </div>
        );
      })}
    </div>
  );
};

export default CharsList;
