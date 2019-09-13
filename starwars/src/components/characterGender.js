import React from "react";
import styled from "styled-components";

const GenderColor = styled.h3`
  color: ${props => (props.gender === "male" ? "blue" : "green")};
`;

export default function CharacterGender(props) {
  return <GenderColor>Gender: {props.gender}</GenderColor>;
}
