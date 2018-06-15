import React from "react";
import CharacterCard from "./CharacterCard";

const CardContainer = props => {
  return (
    <div>
      CARD CONTAINER
      {/* MAP THROUGH ALL CHARACTER CARDS SORT BY FILM */}
      <CharacterCard />
    </div>
  );
};

export default CardContainer;
