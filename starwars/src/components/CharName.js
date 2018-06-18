import React from "react";

const CharName = props => {
  return (
    <div>
      Name: {props.StarWarsChar.name} Height: {props.StarWarsChar.height}
    </div>
  );
};

export default CharName;