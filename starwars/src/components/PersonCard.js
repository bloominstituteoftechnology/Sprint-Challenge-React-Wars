import React from "react";
import styled from "styled-components"

const StyledPersonCard = styled.div`
  border: 1px solid white;
  margin: 20px;
`;

const StyledH1 = styled.h1`
  text-shadow: white 0px 0px 10px;
`;

const StyledH2 = styled.h2`
  text-shadow: white 0px 0px 10px;
`;

const StyledP = styled.p`
  text-shadow: white 0px 0px 10px;
  font-size: 20px;
`;

export default function PersonCard(props) {

  return (
    <StyledPersonCard>
      <StyledH1>{props.name}</StyledH1>
      <StyledH2>About</StyledH2>
      <StyledP>Born: {props.birthYear}</StyledP>
      <StyledP>Gender: {props.gender}</StyledP>
      <StyledP>Height: {props.height}</StyledP>
      <StyledP>Weight: {props.weight}</StyledP>
    </StyledPersonCard>

  )
}
