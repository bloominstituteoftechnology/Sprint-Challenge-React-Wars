import React from "react";
import './StarWars.css';

const Card = props => {
  return (
    <div className="character">
      <h1>Name: {props.character.name}</h1>
    </div>
  )
}
