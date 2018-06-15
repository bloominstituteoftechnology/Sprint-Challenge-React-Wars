import React from "react";
import CharacterCard from "./CharacterCard";

const CardContainer = props => {
  return (
    <div>
      CARD CONTAINER
      {/* MAP THROUGH ALL CHARACTER CARDS SORT BY FILM */}
      {props.characters.map(character => (
        <CharacterCard character={character} key={character.url} />
      ))}
    </div>
  );
};

export default CardContainer;
