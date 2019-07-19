import React from "react";
import styled from "styled-components"

const StyledPersonCard = styled.div`
  border: 1px solid white;
  margin: 20px;
`;

export default function PersonCard(props) {
  console.log(props);
  return (
    <StyledPersonCard>
      <h1>{props.name}</h1>
      <h2>About</h2>
      <p>Born: {props.birthYear}</p>
      <p>Gender: {props.gender}</p>
      <p>Height: {props.height}</p>
      <p>Weight: {props.weight}</p>
    </StyledPersonCard>

  )
}
