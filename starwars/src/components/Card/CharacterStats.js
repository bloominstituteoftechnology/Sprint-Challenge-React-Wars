import React from "react";
import "../StarWars.css";

const CharacterStats = props => {
  return <span>{props.info.height}</span>;
};

export default CharacterStats;
