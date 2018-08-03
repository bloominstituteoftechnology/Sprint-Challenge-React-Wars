import React from "react";

const StarWars = (props) => {
  return (
    <div>
      {props.starwarsChars.map((characterInfo, i) => {
        return characterInfo[i];
      })}
    </div>
  );
};

export default StarWars;
