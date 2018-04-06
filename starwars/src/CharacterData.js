import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardGroup } from 'reactstrap';
import './CharacterData.css';

const CharacterData = props => {
  return (
    <CardGroup className="testStyle">
      <Card>
        <CardBody>
          <CardTitle className="characterName">{props.person.name}</CardTitle>
          <CardText>Date of birth: {props.person.birth_year}</CardText>
          <CardText>Height: {props.person.height}</CardText>
          <CardText>Mass: {props.person.mass}</CardText>
          <CardText>Eye color: {props.person.eye_color}</CardText>
          <CardText>Hair color: {props.person.hair_color}</CardText>
        </CardBody>
      </Card>
    </CardGroup>
  );
};

export default CharacterData;