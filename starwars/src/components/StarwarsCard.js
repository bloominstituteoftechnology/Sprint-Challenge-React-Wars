import React from "react";
import { Card, CardBody, CardImg, CardTitle, CardSubtitle, Col } from "reactstrap";
const StarwarsCard = props => {
  return (
    <Col xs="6" sm="4" key={props.id}>
      <Card>
      {/* <CardImg top width="100%" src="https://swapi.co/api/people/1/" alt="Card image cap" /> */}
        <CardBody>
          <CardTitle>Name: {props.name}</CardTitle>          
          <CardSubtitle>DOB: {props.DOB}</CardSubtitle>
          <CardSubtitle>Gender: {props.gender} </CardSubtitle>
          <CardSubtitle>Weight: {props.weight} </CardSubtitle>
          <CardSubtitle>Eye Color: {props.eyes} </CardSubtitle>
        </CardBody>
      </Card>
    </Col>
  );
};
export default StarwarsCard;
