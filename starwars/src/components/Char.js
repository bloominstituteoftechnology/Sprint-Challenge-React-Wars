import React from "react";
const Char = props => {
  // console.log(props.name);
  return (
    <div className="char-container">
      <h1>Name: {props.char.name}</h1>
      <p>Birth Year: {props.char.birth_year}</p>
      <p>Mass: {props.char.mass}</p>
      <p>Hair color: {props.char.hair_color}</p>
    </div>
  );
};

export default Char;
