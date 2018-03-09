import React from 'react';
import { Card, CardTitle, CardBody, CardText } from 'reactstrap';
import './CharacterCard.css';

const CharacterCard = props => {
  return (
    <div className="CharacterCard">
      <Card>
        <CardBody>
          <CardTitle>{props.character.name}</CardTitle>
        </CardBody>
        <CardBody>
        <CardText>Height: {props.character.height}</CardText>
        <CardText>Mass: {props.character.mass}</CardText>
        <CardText>Hair color: {props.character.hair_color}</CardText>
        <CardText>Skin color: {props.character.skin_color}</CardText>
        </CardBody>
      </Card>
    </div>
  )
}

export default CharacterCard;
