import React from "react";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  Col
} from "reactstrap";

const Cards = props => {
  // const film = props.film;
  // const { film } = props;
  // console.log("film", film);
  return (
    <Col xs="6" md="4" xl="3">
      <Card>
        <CardHeader>{props.name}</CardHeader>
        <CardBody>
          <CardText>{props.height}</CardText>
          <CardText>{props.birth_year}</CardText>
          <CardText>{props.mass}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};
export default Cards;