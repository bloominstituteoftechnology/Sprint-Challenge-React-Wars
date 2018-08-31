import React from "react";
import './StarWars.css'

function Card (props) {
   return (
    <div className="character" onClick={props.onClick}>
      <p> Name: {props.name} </p>
      <p> Height: {props.height} </p>
      <p> Mass: {props.mass} </p>
      <p> Hair Color: {props.hairColor} </p>
      <p> Skin Color: {props.skinColor} </p>
      <div className="back-display hide"></div>
    </div>
   );
}

export default Card ;
