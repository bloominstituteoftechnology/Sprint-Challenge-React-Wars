import React from "react";
import "./StarWars.css";

const Card = props => {
  return (
    <div className="card">
      <h2>{props.attribute.name}</h2>
      <p>Height: {props.attribute.height}</p>
      <p>Mass: {props.attribute.mass}</p>
      <p>Hair: {props.attribute.hair_color}</p>
      <p>Eye: {props.attribute.eye_color}</p>
      <p>Birth: {props.attribute.birth_year}</p>
      <p>Gender: {props.attribute.gender}</p>
    </div>
  );
};

export default Card;
