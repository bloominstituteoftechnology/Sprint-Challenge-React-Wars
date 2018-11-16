import React from "react";
import "./StarWars.css";

const StarWars = props => {
  return (
    <div star-wars-char>
      <p>Name: {props.char.name}</p>
      <p>Gender: {props.char.gender}</p>
      <p>Skin Color: {props.char.skin_color}</p>
      <p>Eye Color: {props.char.eye_color}</p>
      <p>Birth Year: {props.char.birth_year}</p>
      <p>Mass: {props.char.mass}</p>
      <p>Height: {props.char.height}</p>
      <p>Creation: {props.char.created}</p>
      <p>Edited: {props.char.edited}</p>
    </div>
  );
};

export default StarWars;
