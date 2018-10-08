import React from "react";
import Character from './Character';

const CharacterList = props => {
  return (
    <div clasName="character-list">
      <h2>CharacterList component</h2>
      {props.characters.map((char, idx) => (
        <Character 
        key={idx}
        character={char} />)
      )}
    </div>
  );
};

export default CharacterList;
