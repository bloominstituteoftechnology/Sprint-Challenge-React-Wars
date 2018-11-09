import React from "react";
import Character from "./Character";

const CharacterList = props => {
  console.log(props);
  return (
    <div className={'character-list'}>
      {props.characters.map(character => 
        <Character 
          characterDetails={character} 
        />
      )}
    </div>
  );
};

export default CharacterList;
