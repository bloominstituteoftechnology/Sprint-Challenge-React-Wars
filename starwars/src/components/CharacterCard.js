import React from "react";
import {
  Row,
  Col,
  Card,
  Button,
  CardTitle,
  CardText,
  Container
} from "reactstrap";

const CharacterCard = ({ starwarsChar }) => {
  return (
    <Container>
      <Row>
        <Col xs="3" />
        <Col xs="6">
          <Card body className="text-center">
            <CardTitle>{starwarsChar.name}</CardTitle>
            <CardText>Birth Year: ${starwarsChar.birth_year}</CardText>
            <CardText>Height: ${starwarsChar.height}</CardText>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CharacterCard;
