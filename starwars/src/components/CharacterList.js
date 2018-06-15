import React from "react";
import CharacterPreview from './CharacterPreview';

const CharacterList = props => {
  return (
    <div>
      {props.chars.map((char, index) => {
        return <CharacterPreview char={char}
                                 key={index}
                                 displayCharacter={props.displayCharacter} />;
      })}
    </div>
  );
};

export default CharacterList;
