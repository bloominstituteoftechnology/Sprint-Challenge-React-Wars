//Write your Character component here


import React from "react";
import styled from "styled-components";

const Card = styled.div`
  
  background: #83715b;
  color: lightblue;
  padding: 5px;
  margin: 25px;
  text-align: center;
  width: 250px;
  border-radius: 7px;
  box-shadow: 7px 7px 5px #D3D3D3
`;

const Name = styled.h2`
  margin: 5px;
  text-align: center;
`;

const Info = styled.h4`
  color: white;
`;

function Character({ props }) {
  return (
    <Card>
      <Name>Name: {props.name}</Name>
      <Info>Gender: {props.gender}</Info>
      <Info>Year Born: {props.birth_year}</Info>
      <Info>Hair Color: {props.hair_color}</Info>
      <Info>Eye Color: {props.eye_color}</Info>
      <Info>Skin Color: {props.skin_color}</Info>
    </Card>
  );
}

export { Character };