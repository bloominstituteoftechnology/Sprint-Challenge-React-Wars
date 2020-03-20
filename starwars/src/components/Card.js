import React from 'react';
import { CardDeck, Badge, Card, CardHeader,
     CardText } from 'reactstrap';



const Cards = ({ name,  height, mass, hairColor, eyeColor, birthYear, gender}) => {
  return (
    <CardDeck>
     <Card body inverse style={{ backgroundColor: '#333', borderColor: '#CCCC00' }}>
  <CardHeader outline color="warning">
    <h2><Badge color="secondary">{name}</Badge></h2>  
    </CardHeader>
  <CardText>Height:{height}</CardText>
  <CardText>Mass:{mass}</CardText>
  <CardText>Hair Color:{hairColor}</CardText>
  <CardText>Eye Color:{eyeColor}</CardText>
  <CardText>Birth Year:{birthYear}</CardText>
  <CardText>Gender:{gender}</CardText>
 </Card>
 </CardDeck>
  )
};

export default Cards;
