import React from 'react';
import './CardComponent.css';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';

const CardComponent = props => {
  return (
    <div className="cardDiv">
      <Card className="cardCard">
        <CardBody>
          <CardTitle>{props.char.name}</CardTitle>
          <CardSubtitle>Birth Year: {props.char.birth_year}</CardSubtitle>
          <hr />
          <CardText>Height: {props.char.height}</CardText>
          <CardText>Mass: {props.char.mass}</CardText>
          <CardText>Hair Color: {props.char.hair_color}</CardText>
          <CardText>Skin Color: {props.char.skin_color}</CardText>
          <CardText>Eye Color: {props.char.eye_color}</CardText>
          <CardText>Gender: {props.char.gender}</CardText>
          <Button>Learn More</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardComponent;
