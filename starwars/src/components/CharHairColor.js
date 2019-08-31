import React from "react";
import styled from "styled-components";

const HairColor = styled.h3`
  color: #4476ab;
`;

export default function CharHairColor(props) {
  return <HairColor>Hair Color: {props.haircolor}</HairColor>;
}