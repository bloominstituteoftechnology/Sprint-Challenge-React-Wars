import React from "react";
import StarWarsCharData from "./StarWarsCharData";

const StarWarsCharList = props => {
  return (
    <div className="charList">
      {props.characters.map(i => (
        <StarWarsCharData character={i} key={i.created} />
      ))}
      ;
    </div>
  );
};

export default StarWarsCharList;
