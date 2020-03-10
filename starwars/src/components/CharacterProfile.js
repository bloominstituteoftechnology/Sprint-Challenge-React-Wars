import React from 'react';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';

const CharacterProfile = (props) => {
  return (
    <Row>
      <Col sm="6">
        <Card body>
          <CardTitle>Name: {props.name}</CardTitle>
          <br></br>
          <CardText>Height: {props.height}</CardText>
          <br></br>
          <CardText>Mass: {props.mass}</CardText>
          <br></br>
          <CardText>Hair Color: {props.hair_color}</CardText>
          <br></br>
          <CardText>Skin Color: {props.skin_color}</CardText>
          <br></br>
          <CardText>Eye Color: {props.eye_color}</CardText>
          <br></br>
          <CardText>Birth Year: {props.birth_year}</CardText>
          <br></br>
          <CardText>Gender: {props.gender}</CardText>
          <br></br>
          <CardText>Homeworld: {props.homeworld}</CardText>
          <br></br>
        </Card>
      </Col>
    </Row>
  );
};

export default CharacterProfile;