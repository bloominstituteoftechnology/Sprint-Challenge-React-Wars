import React from "react";
import StarWarsCharData from "./StarWarsCharData";

const StarWarsCharList = props => {
  return (
    <div className="charList">
      {props.characters.map(i => (
        <StarWarsCharData character={i} />
      ))}
      ;
    </div>
  );
};

export default StarWarsCharList;
