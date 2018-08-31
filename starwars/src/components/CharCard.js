import React from "react";

const CharCard = props => {
  return (
    <div>
      <div onClick={props.returnToList}>Return to list</div>
      <h1>{props.character.name}</h1>
    </div>
  );
};

export default CharCard;