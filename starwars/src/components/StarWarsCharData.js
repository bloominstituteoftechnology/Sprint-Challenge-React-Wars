import React from "react";
import "./StarWars.css";

const StarWarsCharData = props => {
  return (
    <div className="starWarsCharContent">
      <h1>{props.character.name}</h1>
      <div className="charContentDetails">
        <div>BIRTHDAY:{props.character.birth_year}</div>
        <div>CREATED:{props.character.created}</div>
        <div>EDITED:{props.character.edited}</div>
        <div>EYE COLOR:{props.character.eye_color}</div>
        <div>GENDER:{props.character.gender}</div>
        <div>HAIR COLOR:{props.character.hair_color}</div>
        <div>HEIGHT: {props.character.height}</div>
        <div>HOMEWORLD: {props.character.homeworld}</div>
        <div>MASS: {props.character.mass}</div>
        <div>SKING COLOR: {props.character.skin_color}</div>
        <div>SPECIES: {props.character.species}</div>
        <div>STARSHIPS: {props.character.starships}</div>
        <div>URL: {props.character.url}</div>
        <div>VEHICLES: {props.character.vehicles}</div>
      </div>
    </div>
  );
};

export default StarWarsCharData;
