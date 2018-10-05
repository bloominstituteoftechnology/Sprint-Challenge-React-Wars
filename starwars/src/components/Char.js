import React from "react";

import "./Char.css";
const Char = props => {
  return (
    <div className="char-card" id={props.id}>
      <h2>{props.charName}</h2>

      <div className={"char-info"}>
        <p>Gender: {props.charGender}</p>
        <p>Born: {props.charBirthYear}</p>
        <p>Eye color: {props.charEyes}</p>
        <p>Hair color: {props.charHair}</p>
        <p>Height: {props.charHeight}</p>
        <p>Mass: {props.charMass}</p>
        <p>Skin color: {props.charSkin}</p>
      </div>
    </div>
  );
};

export default Char;
