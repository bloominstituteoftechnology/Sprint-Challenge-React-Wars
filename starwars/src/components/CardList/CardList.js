import React from 'react';
import './CardList.css';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  } from 'reactstrap';

const CardList = props => {
  return (
  <div className="cardDiv">
  <Card color="black" className="cardCard">
  
  <CardBody className="cardBody">
  <CardTitle>{props.char.name}</CardTitle>
  <CardSubtitle>Birth Year: {props.char.birth_year}</CardSubtitle>
  <CardText>Height: {props.char.height}</CardText>
  <CardText>Mass: {props.char.mass}</CardText>
  <CardText>Hair Color: {props.char.hair_color}</CardText>
<CardText>Skin Color: {props.char.skin_color}</CardText>
<CardText>Eye Color: {props.char.eye_color}</CardText>
<CardText>Gender: {props.char.gender}</CardText>
      
  </CardBody>
</Card>
    
    </div>
  );
};
 export default CardList;