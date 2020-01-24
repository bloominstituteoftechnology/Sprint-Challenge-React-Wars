import React from "react";
import { Card, CardText, CardBody, CardTitle, CardImg, Col } from "reactstrap";

export default function NameList(props) {
  return (
    <Col width="50%" >
      <Card className="listname" key={props.id}>
        {/* <CardImg src="casey-horner-RmoWqDCqN2E-unsplash.jpg"/> */}
        <CardBody className="p-3 mb-2 bg-info text-white" width="50%" p="p-b">
          <CardTitle>Name: {props.name}</CardTitle>
          <CardText>Sex: {props.gender}</CardText>
          <CardText className="Text-Primary">Height: {props.height}</CardText>
          <CardText>Hair Color: {props.hair_color}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
}
