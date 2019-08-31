import React from "react";
import styled from "styled-components";
import CharGender from "./CharGender";
import CharBirthYear from "./CharBirthYear";
import CharEyeColor from "./CharEyeColor";
import CharHairColor from "./CharHairColor";
import CharHeight from "./CharHeight";



const StyledCards = styled.div`
  border: 2px dashed black;
  width: 600px;
  margin: 15px auto;
  padding: 5px;
  background: #c5d6d9;
  display: grid;

`;
const StyledNames = styled.h3`
  color: #c7a43c;
`;



export default function CharCards(props) {
  console.log("card: props: ", props);
  return (
    <StyledCards>
      <StyledNames>Name: {props.people.name}</StyledNames>
      <CharGender gender={props.people.gender} />
      <CharBirthYear birthyear={props.people.birth_year} />
      <CharHeight height={props.people.height} />
      <CharHairColor haircolor={props.people.hair_color} />
      <CharEyeColor eyecolor={props.people.eye_color} />
    </StyledCards>
  );
}