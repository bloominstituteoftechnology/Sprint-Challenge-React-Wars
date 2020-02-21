import React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  Col
} from "reactstrap";

const Cards = props => {
    

  return (
    <Col xs="6" md="4" xl="3">
      <Card>
        <CardBody>
          <CardText>{props.name}</CardText>
          <CardText>{props.birth_year}</CardText>
          <CardText>{props.mass}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};
export default Cards;