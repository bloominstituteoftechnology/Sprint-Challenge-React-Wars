import React from "react";
import "./StarWars.css";

const AvatarStats = props => {
  return (
    <div className="renderTable">
      {props.data.map(item => {
        return (
          <div className="avatarStatBlock">
            <p className="renderData">Name: {item.name}</p>
            <hr />
            <p className="renderData">Birth year: {item.birth_year}</p>
            <p className="renderData">Gender: {item.gender}</p>
            <p className="renderData">Eye color: {item.eye_color}</p>
            <p className="renderData">Hair color: {item.hair_color}</p>
            <p className="renderData">Skin color: {item.skin_color}</p>
            <p className="renderData">Height: {item.height}</p>
            <p className="renderData">Mass: {item.mass}</p>
            <hr />
            <p className="renderData">Created: {item.created}</p>
            <p className="renderData">Edited: {item.edited}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AvatarStats;
