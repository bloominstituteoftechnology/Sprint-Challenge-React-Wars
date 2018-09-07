import React from "react";
import './StarWars.css'

var re =/[A-Z][a-zA-Z1-9-]*/

function Card (props) {
   return (
    <div className="character" onClick={props.onClick} data-char={re.exec(props.name).toString().toLowerCase()}>
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
