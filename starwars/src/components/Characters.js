import React from "react";
import Character from "./Character";
import "./StarWars.css";

const Characters = ({ chars }) => (
  <div className="characters">
    {chars.map((char, index) => (
      <Character key={index} data={char} />
    ))}
  </div>
);

export default Characters;
