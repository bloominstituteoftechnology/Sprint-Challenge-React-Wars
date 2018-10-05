import React from "react";
import Character from "./Character";
import "./StarWars.css";

const Characters = ({ chars }) => (
  <div className="Characters">
    {chars.map((char, index) => (
      <Character key={index} data={char} />
    ))}
  </div>
);

export default Characters;
