import React from "react";
import "./StarWars.css";

import CharacterCard from "./CharacterCard";

const ListOfCharCards = props => {
  let starwarsCharsArray = props.starwarsArray;
  return (
    <div className="characterCardDiv">
      {starwarsCharsArray.map(char => (
        <CharacterCard
          // handleToggleComplete={props.handleToggleComplete}
          starwarsArray={char}
          toggleChars={props.toggleChars}
          // add key below to remove error message about
          // needing unique key for each child
          
        />
      ))}
    </div>
  );
};

export default ListOfCharCards;