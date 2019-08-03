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
`;

export default function CharacterCards(props) {
  console.log("card: props: ", props);
  return (
    <StyledCards>
      <h3>Name: {props.people.name}</h3>
      <CharacterGender gender={props.people.gender} />
      <CharacterBirthYear birthyear={props.people.birth_year} />
      <CharacterHairColor haircolor={props.people.hair_color} />
      <CharacterEyeColor eyecolor={props.people.eye_color} />
      <CharacterHeight height={props.people.height} />
    </StyledCards>
  );
}
