import React from "react";
import styled from "styled-components";

const SwTitle = styled.h1`
  color: gray;
`;

const SwCard = props => {
  return (
    <li key={props.id}>
      <SwTitle>Name: {props.name}</SwTitle>
      <p>Birthyear: {props.birth_year}</p>
      <p>Eyecolor: {props.eye_color}</p>
    </li>
  );
};
export default SwCard;
