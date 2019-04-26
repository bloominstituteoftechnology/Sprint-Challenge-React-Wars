import React from "react";
import Character from "./Character";

export default function StarwarsCharList(props) {
  return (
    <div>
      {props.characters.map((character, index) => (
        <Character key={index} character={character} />
      ))}
    </div>
  );
}
