import React from 'react';
import { Card, CardHeader,
     CardText } from 'reactstrap';

const Cards = ({ name,  height, mass, hairColor, eyeColor, birthYear, gender}) => {
  return (
     <Card>
  <CardHeader> {name} </CardHeader>
  <CardText>Height:{height}</CardText>
  <CardText>Mass:{mass}</CardText>
  <CardText>Hair Color:{hairColor}</CardText>
  <CardText>Eye Color:{eyeColor}</CardText>
  <CardText>Birth Year:{birthYear}</CardText>
  <CardText>Gender:{gender}</CardText>
 </Card>
  )
};

export default Cards;
