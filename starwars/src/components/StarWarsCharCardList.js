import React from "react";
import StarwarsChar from "./StarWarsCharCard";
import "./StarWars.css";

function StarWarsCharCardList(props) {
  return (
    <div className="card-container">
      {props.starwarsChars.map(starwarsChar => (
        <StarwarsChar starwarsChar={starwarsChar} key={starwarsChar.name} />
      ))}
    </div>
  );
}

export default StarWarsCharCardList;
