import React from "react";

const StyledCards = styled.div`
  border: 1px solid black;
  width: 400px;
  margin: 20px auto;
  background: rgba(123, 163, 13, 0.3);
`;
const StyledNames = styled.h3`
  color: red;
`;

export default function CharCards(props) {
  console.log("card: props: ", props);
  return (
    <StyledCards>
      <StyledNames>Name: {props.people.name}</StyledNames>
      <CharGender gender={props.people.gender} />
      <CharBirthYear birthyear={props.people.birth_year} />
      <CharHairColor haircolor={props.people.hair_color} />
      <CharEyeColor eyecolor={props.people.eye_color} />
      <CharHeight height={props.people.height} />
    </StyledCards>
  );
}