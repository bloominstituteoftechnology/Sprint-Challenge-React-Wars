import React from "react";
import styled from "styled-components";
import {
  Card, CardText, CardBody,
  CardTitle, Col
} from 'reactstrap';

const CardBackground = styled.div`
  /* background: dodgerblue; */
  border: 5px solid black;
  background: dodgerblue;
  /* color: black; */
  /* width: 100%; */
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
  /* justify-content: space-between; */
`;

const CardOuter = styled.div`
  color: black; 
  width: 100%; 
  display: flex; 
  flex-direction: column; 
  align-items: center; 
`;

const StarWarsCard = (props) => {

    return (
      <CardOuter>
      <Col xs="12" s="6" md="4">
      <Card>
        <CardBackground div key={props.id}>
          <CardBody>
             <CardTitle>Name: {props.name}</CardTitle>
              <CardText>Height: {props.height}</CardText>
              <CardText>Mass: {props.mass}</CardText>
              <CardText>Gender: {props.gender}</CardText>
            </CardBody>
        </CardBackground>
      </Card>
      </Col>
      </CardOuter>
    );

}

export default StarWarsCard;
