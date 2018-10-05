import React from "react";

const Char = props => {
  return (
    <div className="char">
      <h2>{props.charName}</h2>
      <p>{props.charGender}</p>
      <p>{props.charBirthYear}</p>
      <p>{props.Eyes}</p>
      <p>{props.charHair}</p>
      <p>{props.charHeight}</p>
      <p>{props.charMass}</p>
      <p>{props.charSkin}</p>
    </div>
  );
};

export default Char;
