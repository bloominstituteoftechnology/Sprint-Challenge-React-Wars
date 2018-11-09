import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = props => {
  let count = -1;
  return (
    <div className="card-container">
      {props.chars.map(char => (
        <CharacterCard key={char.created} char={char} count={(count += 1)} />
      ))}
    </div>
  );
};

export default CharacterList;
