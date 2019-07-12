import React from "react";
// import styled from 'styled-components'

import CharacterCard from "./CharacterCard";

export default function DisplayCharacters(props) {
  console.log(props);
  return (
    <div>
      {props.charList.map(char => {
        return <CharacterCard char={char} />;
      })}
    </div>
  );
}