import React from "react";

const Card = props => {
  return (
    <ul>
      {props.contents.map((starWarsCharacter, i) => {
        return <li key={i}>{starWarsCharacter.name}</li>;
      })}
    </ul>
  );
};

export default Card;
