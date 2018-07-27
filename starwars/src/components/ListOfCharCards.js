import React from "react";
import "./StarWars.css";

import CharacterCard from "./CharacterCard";

const ListOfCharCards = props => {
  let starwarsCharsArray = props.starwarsArray;
  return (
    <div>
      {starwarsCharsArray.map(char => (
        <CharacterCard
          // handleToggleComplete={props.handleToggleComplete}
          starwarsArray={char}
          // add key below to remove error message about
          // needing unique key for each child
          // key={char.id}
        />
      ))}
    </div>
  );
};

export default ListOfCharCards;