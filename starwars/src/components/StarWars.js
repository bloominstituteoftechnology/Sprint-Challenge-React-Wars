import React from 'react';
import { Card, CardHeader, CardBody, CardTitle } from 'reactstrap';
import styled from 'styled-components';

const StyledDiv = styled.div`
  max-width: 300px;
  min-width: 300px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  //   justify-content: space-between;
`;
const StarWars = props => {
  //   console.log(props);
  const {
    name,
    birth_year,
    gender,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color
  } = props.item;
  return (
    <StyledDiv>
      <Card>
        <CardHeader>Name: {name}</CardHeader>
        <CardBody>
          <CardTitle>Birthday: {birth_year}</CardTitle>
          <CardTitle>Gender: {gender}</CardTitle>
          <CardTitle>Height: {height}</CardTitle>
          <CardTitle>Mass: {mass}</CardTitle>
          <CardTitle>Hair Color: {hair_color}</CardTitle>
          <CardTitle>Skin Color: {skin_color}</CardTitle>
          <CardTitle>Eye Color: {eye_color}</CardTitle>
        </CardBody>
      </Card>
    </StyledDiv>
  );
};
export default StarWars;
