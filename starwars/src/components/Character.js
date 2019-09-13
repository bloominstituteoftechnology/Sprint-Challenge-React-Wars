import React from "react";
// import "./StarWars.css";

const Character = props => {
  return (
    <div className="individual">
      <h1 className="theCrew">{props.char.name}</h1>
      <p>{props.char.name}</p>
      <p>{props.char.height}</p>
      <p>{props.char.mass}</p>
      <p>{props.char.hair_color}</p>
      <p>{props.char.skin_color}</p>
      <p>{props.char.eye_color}</p>
      <p>{props.char.birth_year}</p>
      <p>{props.char.gender_color}</p>
      <p>{props.char.homeworld}</p>
      <p>{props.char.films}</p>
      <p>{props.char.species}</p>
      <p>{props.char.vehicles}</p>
      <p>{props.char.starships}</p>
      <p>{props.char.edited}</p>
      <p>{props.char.url}</p>
    </div>
  );
};

export default Character;