import React from "react";
import styled from "styled-components";
import {
  Card,
  CardText,
  Row
} from "reactstrap";

const JediBox = styled.div`
  background-color: #FFBA58;
  margin: 3% 20%;
  padding: 2%;
  border: 3px orange solid;
`;

const Cards = props => {
    
  return (
    <Row>
      <JediBox>
        <Card>
          <CardText>Name: {props.name}</CardText>
          <CardText>Gender: {props.gender}</CardText>
          <CardText>Height: {props.height}cm</CardText>
          <CardText>Mass: {props.mass}kg</CardText>
        </Card>
      </JediBox>
    </Row>
  );
};

export default Cards;