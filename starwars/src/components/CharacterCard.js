import React from "react";
import styled from "styled-components";
//import Character from  "./components/Character.js";
//import CharacterList from "./CharacterList.js";

const ContentWrapper = styled.div`
  border: 2px solid orange;
  width: 25%;
  border-radius: 20px;
  background-color: tan;
  margin-bottom: 30px;
`;

const CharacterCard = props => {
  return (
    <ContentWrapper>
      <h2>NAME: {props.char.name}</h2>
      <h3>BIRTH YEAR: {props.char.birth_year}</h3>
      <h3>EYE COLOR: {props.char.eye_color}</h3>
      <h4>GENDER: {props.char.gender}</h4>
    </ContentWrapper>
  );
};

export default CharacterCard;