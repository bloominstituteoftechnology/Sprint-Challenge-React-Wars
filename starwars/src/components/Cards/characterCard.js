import React from 'react';
import './Cards.css';
import {Card, CardText, CardBody, CardTitle, Button} from 'reactstrap';

const CharacterCard = (props) => {
  
    return (
      <Card className='characterCard' id={props.character.name} key={props.character.name}>
        <CardTitle className='charcter-name'>{props.character.name}</CardTitle>
      <CardText className='birthday'><strong>Birthday: </strong> {props.character.birth_year}</CardText>
        <h2 className='character-titles'>Chracter Traits</h2>
      <CardBody className='chracter-traits'>
        <CardText><strong>Height:</strong> {props.character.height}</CardText>
        <CardText><strong>Weight:</strong> {props.character.mass}</CardText>
        <CardText><strong>Hair Color:</strong> {props.character.hair_color}</CardText>
        <CardText><strong>Skin Color:</strong>  {props.character.skin_color}</CardText>
        <CardText><strong>Eye Color:</strong> {props.character.eye_color}</CardText>
    </CardBody>
    <Button>Find Films</Button>
    </Card>
    );
}

export default CharacterCard;
