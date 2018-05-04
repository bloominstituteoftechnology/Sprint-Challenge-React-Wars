import React from 'react';
import './Card.css';
import { Card, CardText, CardBody,
  CardTitle} from 'reactstrap';

const CardContainer = props => {
  return (
    <Card className = "Card-Wrapper">
      <CardBody>
        <CardTitle>{props.character.name}</CardTitle>
        <CardText>Gender: {props.character.gender}</CardText>
        <CardText>Hair Color: {props.character.hair_color}</CardText>
        <CardText>Eye Color: {props.character.eye_color}</CardText>
        <CardText>Height: {props.character.height}</CardText>
      </CardBody>
    </Card>
  )
}

export default CardContainer;