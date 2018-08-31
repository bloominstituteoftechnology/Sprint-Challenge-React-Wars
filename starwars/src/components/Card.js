import React from "react";

function Card (props) {
   return (
    <div>
      <p> Name: {props.name} </p>
      <p> Height: {props.height} </p>
      <p> Mass: {props.mass} </p>
      <p> Hair Color: {props.hairColor} </p>
      <p> Skin Color: {props.skinColor} </p>
    </div>
   );
}

export default Card ;
