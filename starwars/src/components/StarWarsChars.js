import React from "react";
import Char from "./Char";
import "./StarWars.css";
const StarWarsChars = props => {
  return (
    <div className="star-wars-container">
      {/* <h1> Hello</h1> */}
      {props.starwarsChars.map(char => {
        console.log(char);
        return (
          <React.Fragment key={char.created}>
            <Char char={char} keys={char.created} />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default StarWarsChars;
