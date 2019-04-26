import React from "react";
import Character from "./Character";

export default function StarwarsCharList(props) {
  return (
    <div>
      {props.characters.map((character, birth_year, homeworld, index) => (
        <Character key={index} character={character} birth_year={birth_year} homeworld={homeworld} />
      ))}
    </div>
  );
}
