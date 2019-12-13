import React from "react";
import styled from "styled-components"

const StyledCard = styled.div`

  width: 400px;
  height: 300px;
  padding: 20px;
  box-sizing: border-box;
  background: black;
  border-radius: 5px;
  margin: 50px;

`

const StyledH1 = styled.h1`

  font-size: 2rem;
  color: yellow;

`

const StyledP = styled.p`

  font-size: 1.4rem;
  color: yellow;

`

const StarCard = (props) => {

  return (
    <div>
      <StyledCard>
        <StyledH1>{props.name}</StyledH1>  
        <StyledP>Birth Year: {props.birth_year}</StyledP>
        <StyledP>Height: {props.height}cm</StyledP>
        <StyledP>Mass: {props.mass}kg</StyledP>
      </StyledCard>
    </div>
  )

}

export default StarCard;