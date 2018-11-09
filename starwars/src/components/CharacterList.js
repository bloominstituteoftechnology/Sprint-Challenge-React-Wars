import React from "react";
import Character from "./Character";

const CharacterList = props => {
  return (
    <div className={'character-list'}>
      {props.characters.map(character => 
        <Character 
          key={character.name}
          characterDetails={character}
          getHomeworld = {props.getHomeworld}
        />
      )}
    </div>
  );
};

export default CharacterList;
