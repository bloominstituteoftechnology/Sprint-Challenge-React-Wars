import React from "react";

const StarWarsCharData = props => {
  <div className="starWarsCharContent">
    <h1>{props.character.name}</h1>
    <div className="charContentDetails">
      <div>Birthday:{props.character.birth_year}</div>
      <div>created:{props.character.created}</div>
      <div>edited:{props.character.edited}</div>
      <div>eyeColor:{props.character.eye_color}</div>
      <div>gender:{props.character.gender}</div>
      <div>hairColor:{props.character.hair.color}</div>
      <div>height:{props.character.height}</div>
      <div>homeworld:{props.character.homeworld}</div>
      <div>mass:{props.character.mass}</div>
      <div>skingColor:{props.character.skin_color}</div>
      <div>species:{props.character.species}</div>
      <div>starships:{props.character.starships}</div>
      <div>url:{props.character.url}</div>
      <div>vehicles:{props.character.vehicles}</div>
    </div>
  </div>;
};
