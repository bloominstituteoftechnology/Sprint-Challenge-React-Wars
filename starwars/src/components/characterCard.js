import React from "react";
import CharacterGender from "./characterGender";
import CharacterBirthYear from "./characterBirthYear";
import styled from "styled-components";
import CharacterHomeWorld from "./characterEyeColor";
import CharacterEyeColor from "./characterEyeColor";
import CharacterHairColor from "./characterHairColor";
import CharacterHeight from "./characterHeight";

const StyledCards = styled.div`
  border: 1px solid black;
  width: 400px;
  margin: 20px auto;
  background: rgba(123, 163, 13, 0.3);
`;
const StyledNames = styled.h3`
  color: red;
`;

export default function CharacterCards(props) {
  console.log("card: props: ", props);
  return (
    <StyledCards>
      <StyledNames>Name: {props.people.name}</StyledNames>
      <CharacterGender gender={props.people.gender} />
      <CharacterBirthYear birthyear={props.people.birth_year} />
      <CharacterHairColor haircolor={props.people.hair_color} />
      <CharacterEyeColor eyecolor={props.people.eye_color} />
      <CharacterHeight height={props.people.height} />
    </StyledCards>
  );
}
