import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
  border: 2px solid;
  width: 20%;
  background-color:burlywood;
  margin-bottom: 30px;
`;

const CharacterCard = props => {
  return (
    <ContentWrapper>
      <h2>NAME: {props.char.name}</h2>
      <h4>BIRTH YEAR: {props.char.birth_year}</h4>
      <h4>EYE COLOR: {props.char.eye_color}</h4>
      <h4>GENDER: {props.char.gender}</h4>
    </ContentWrapper>
  );
};

export default CharacterCard;