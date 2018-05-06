import React from 'react';
import { Card, Button, CardImg, CardTitle, 
  CardText, CardGroup, CardSubtitle, CardBody } from 'reactstrap';
import './Character.css';

const Character = ({ character }) => {
  return (
    <div className="main-div">
    <CardGroup className="card-group">
      <Card>
        <CardBody className="card-body">
          <CardTitle>{character.name}</CardTitle>
          <CardText>{character.gender}</CardText>
          <CardText>{character.height}</CardText>
          <CardText>{character.mass}</CardText>
          <CardText>{character.hair_color}</CardText>
          <CardText>{character.skin_color}</CardText>
          <Button>More Info</Button>
        </CardBody>
      </Card>
    </CardGroup>
    </div>
  );
};

export default Character;


