import React from "react";

const CharacterPreview = props => {
  return (
    <div className="character-preview" onClick={() => props.displayCharacter(props.char.name)}>
      {props.char.name}
    </div>
  );
};

export default CharacterPreview;
