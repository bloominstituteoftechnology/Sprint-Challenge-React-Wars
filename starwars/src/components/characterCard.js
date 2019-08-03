import React from "react";
import CharacterGender from "./characterGender";
import CharacterBirthYear from "./characterBirthYear";
import styled from "styled-components";

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
    </StyledCards>
  );
}
