// Character Template
import React from "react";
import "./StarWars.css";

export default function Character(props) {
  return (
    <div className="character box">
      <h3>Name: {props.character.name}</h3>
    </div>
  );
}