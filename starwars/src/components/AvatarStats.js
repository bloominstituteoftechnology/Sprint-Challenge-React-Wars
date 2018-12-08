import React from "react";
import "./StarWars.css";

const AvatarStats = props => {
  return (
    <div className="renderTable">
      {props.data.map(item => {
        return (
          <div className="avatarStatBlock">
            <p>Name: {item.name}</p>
            <p>Birth year: {item.birth_year}</p>
            <p>Gender: {item.gender}</p>
            <p>Eye color: {item.eye_color}</p>
            <p>Hair color: {item.hair_color}</p>
            <p>Skin color: {item.skin_color}</p>
            <p>Height: {item.height}</p>
            <p>Mass: {item.mass}</p>
            <p>Created: {item.created}</p>
            <p>Edited: {item.edited}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AvatarStats;
