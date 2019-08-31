import React from "react";
import styled from "styled-components";

const BirthYearColor = styled.h3`
  color: #4476ab;
`;

export default function CharBirthYear(props) {
  return <BirthYearColor>BirthYear: {props.birthyear}</BirthYearColor>;
}