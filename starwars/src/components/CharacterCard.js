import React from 'react';
import { Card, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';
import './CharacterCard.css';

const CharacterCard = (props) => {
  
  return (
    
      <Card>
        <CardBody>
          <CardTitle>{props.character.name}</CardTitle>
          <CardText>Was born: {props.character.birth_year}</CardText>
          <CardText>Gender: {props.character.gender}</CardText>
          <CardText>Height: {props.character.height}cm</CardText>
          <CardText>Weight: {props.character.mass}kg</CardText>
        </CardBody>
        
      </Card>
    
  );
};

export default CharacterCard;