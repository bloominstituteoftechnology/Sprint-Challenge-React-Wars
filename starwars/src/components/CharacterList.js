import React from "react";
import Character from "./Character";

const CharacterList = props => {
  return (
    <div>
      <div className="character-list-container title">
        {props.starwarsChars.map(character => (
          <Character key={character.name} character={character} />
        ))}
      </div>
    </div>
  );
};

export default CharacterList;