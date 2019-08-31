import React from "react";
import styled from "styled-components";

const height = styled.h3`
  color: #03e8fc;
`;

export default function CharHeight(props) {
  return <h3>Height: {props.height}</h3>;
}