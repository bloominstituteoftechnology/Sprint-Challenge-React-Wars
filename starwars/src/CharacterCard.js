import React from "react";

const CharacterCard = ({ starwarsChar }) => {
  return (
    <div>
      <div> {starwarsChar.name}</div>
      <div> {starwarsChar.birth_year}</div>
      <div> {starwarsChar.height}</div>
    </div>
  );
};

export default CharacterCard;
