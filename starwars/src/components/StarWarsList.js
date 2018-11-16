import React from "react";
import StarWars from "./StarWars";

const StarWarsList = props => {
  return (
    <div char-list>
      {props.starwarsList.map(char => (
        <StarWars char={char} />
      ))}
    </div>
  );
};

export default StarWarsList;
