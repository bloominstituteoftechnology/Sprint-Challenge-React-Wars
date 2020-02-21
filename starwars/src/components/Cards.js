import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Col
  } from 'reactstrap';

const Cards = props => {
return(
    <Col xs='6' md='4' xl='3'>
      <Card>
        <CardBody>
          <CardTitle>Name: {props.data.name}</CardTitle>
          <CardSubtitle>Height: {props.data.height} Birth-Year: {props.data.birth_year}</CardSubtitle>
          <CardText>`{props.data.name} has {props.data.hair_color} hair, {props.data.skin_color} skin tone, and {props.data.eye_color} eyes!`</CardText>
        </CardBody>
      </Card>
    </Col>
);
}

export default Cards;