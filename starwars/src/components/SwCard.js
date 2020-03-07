import React from "react";

const SwCard = props => {
  return (
    <li>
      <h1>Name: {props.name}</h1>
      <p>Birthyear: {props.birth_year}</p>
      <p>Eyecolor: {props.eye_color}</p>
    </li>
  );
};
export default SwCard;
