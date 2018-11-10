import React from "react";
import Character from "./Character";

const CharacterList = props => {
  // console.log(props.characters);
  return (
    <div className={"character-list"}>
      {props.characters.map(character => (
        <Character key={character.name} characterDetails={character} />
      ))}
    </div>
  );
};

export default CharacterList;
