import React from "react";

function CharacterCard(props) {
  console.log(props);
  return (
    <section className="character-card">

      <h2>Name: {props.name}</h2>
      <div>Height: {props.height}</div>
      <div>Mass: {props.mass}</div>
      <div>Eye: {props.eye}</div>
      <div>Hair: {props.hair}</div>
      <div>Skin: {props.skin}</div>
      <div>Birth Year: {props.birth_year}</div>
      <div>Gender: {props.gender}</div>
      <div>Homeworld: {props.homeworld}</div>
    </section>
  );




}

export default CharacterCard;
