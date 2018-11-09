import React from "react";
import Character from "./Character";
const CharacterList = props => {
  return (
    <div className="CharacterList">
      {props.list.map((char, item) => (
        <Character key={item} charstat={char} />
      ))}
    </div>
  );
};
export default CharacterList;
