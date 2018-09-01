import React from "react";
import Header from "./Header";
import CharacterInfo from "./CharacterInfo";
import "./StarWars.css";

const Character = props => {
  return (
    <div className={`character`}>
      <Header header={props.header} />
      <CharacterInfo
        gender={props.gender}
        birthYear={props.birthYear}
        eyeColor={props.eyeColor}
        hair={props.hair}
        height={props.height}
        mass={props.mass}
      />
    </div>
  );
};

export default Character;