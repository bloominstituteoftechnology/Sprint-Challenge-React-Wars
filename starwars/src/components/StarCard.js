import React from "react";
import "./StarWars.css";

const StarCard = props => {
  return (
    <div className="cards">
      <div className="text">
        <h3>{props.charData.name}</h3>
        <div>HEIGHT: {props.charData.height}</div>
        <div>EYE COLOR: {props.charData.eye_color}</div>
        <div>SKIN TONE: {props.charData.skin_color}</div>
        <div>HAIR COLOR: {props.charData.hair_color}</div>
        <div>MASS/WEIGHT: {props.charData.mass}</div>
      </div>
    </div>
  );
};

export default StarCard;
