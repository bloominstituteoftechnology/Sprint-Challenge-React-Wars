import React from 'react';
import { Card, Button, CardTitle, 
  CardText, CardGroup, CardBody } from 'reactstrap';
import './App.css';

const Character = ({ character }) => {
  return (
    <div className="Card">
    <CardGroup>
      <Card>
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" className="StarWarsImg"/>
        <CardBody>
          <CardTitle className="Name">{character.name}</CardTitle>
          <CardText>Gender: {character.gender}</CardText>
          <CardText>Height: {character.height}</CardText>
          <CardText>Mass: {character.mass}</CardText>
          <CardText>Skin colour: {character.skin_color}</CardText>
        </CardBody>
      </Card>
    </CardGroup>
    </div>
  );
};

export default Character;