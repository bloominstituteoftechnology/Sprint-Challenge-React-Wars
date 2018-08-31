import React, { Component } from "react";
import "./StarWars.css";
import Card from "./Card.js";

const CardContainer = props => {
  return (
    <div className="cards-container">
      {props.characters.map(character => (
        <Card character={character} />
      ))}
    </div>
  );
};
export default CardContainer;
