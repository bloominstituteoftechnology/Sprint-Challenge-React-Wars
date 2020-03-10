import React from 'react';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';

const CharacterProfile = (props) => {
  return (
    <Row>
      <Col sm="6">
        <Card body>
          <CardTitle>Name: {props.name}</CardTitle>
          <CardText>Height: {props.height}</CardText>
          <CardText>Mass: {props.mass}</CardText>
          <CardText>Hair Color: {props.hair_color}</CardText>
          <CardText>Skin Color: {props.skin_color}</CardText>
          <CardText>Eye Color: {props.eye_color}</CardText>
          <CardText>Birth Year: {props.birth_year}</CardText>
          <CardText>Gender: {props.gender}</CardText>
          <CardText>Homeworld: {props.homeworld}</CardText>
        </Card>
      </Col>
    </Row>
  );
};

export default CharacterProfile;