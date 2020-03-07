import React from "react";
import styled from "styled-components";

const SwSubtitle = styled.h2`
  color: black;
  font-size: 40px;
`;

const SwPara = styled.p`
  color: 685e5c;
  font-size: 20px;
`;

const CharContainer = styled.li`
  border: 1px solid grey;
`;

const SwCard = props => {
  return (
    <CharContainer key={props.id}>
      <SwSubtitle>Name: {props.name}</SwSubtitle>
      <SwPara>Birthyear: {props.birth_year}</SwPara>
      <SwPara>Eyecolor: {props.eye_color}</SwPara>
    </CharContainer>
  );
};
export default SwCard;
