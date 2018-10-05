import React from "react";
import CharacterContainer from "./CharacterContainer";
import './StarWars.css';

const CharacterCaro = props => {
  return (
    <div className="characterCaro">
        <div className="characterContent">
            <CharacterContainer 
            characters={props.characters}
            />
        </div>
    </div>
  );
};

export default CharacterCaro;
