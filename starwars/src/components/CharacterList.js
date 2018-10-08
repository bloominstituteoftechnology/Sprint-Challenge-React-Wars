import React from "react";
import Character from './Character';

const CharacterList = props => {
  return (
    <div clasName="character-list">
      <h2>CharacterList component</h2>
      <Character />
    </div>
  );
};

export default CharacterList;
