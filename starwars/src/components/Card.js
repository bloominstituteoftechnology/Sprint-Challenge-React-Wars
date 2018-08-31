import React from "react";
import './StarWars.css'

function Card (props) {
   return (
    <div className="character">
      <p> Name: {props.name} </p>
      <p> Height: {props.height} </p>
      <p> Mass: {props.mass} </p>
      <p> Hair Color: {props.hairColor} </p>
      <p> Skin Color: {props.skinColor} </p>
    </div>
   );
}

export default Card ;
