import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Col } from "reactstrap";
const StarwarsCard = props => {
  return (
    <Col xs="6" sm="4" key={props.id}>
      <Card>
        <CardBody>
          <CardTitle>Film title: {props.title}</CardTitle>
          <CardText>{props.description}</CardText>
          <CardSubtitle>Director: {props.director}</CardSubtitle>
          <CardSubtitle>Release date: <small className="text-warning">{props.release_date}</small></CardSubtitle>
        </CardBody>
      </Card>
    </Col>
  );
};
export default StarwarsCard;
