import React from 'react';
import './Character.css';
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
  } from "reactstrap";


  //we are not setting state here because we are setting state in the App. There is no need to
  //set state here. So we will just declare a const here. 
  const Character = ({char}) => {
      return (
        <div className = "card-wrapper">
            <Card className ="card">
                <CardBody>
                <CardTitle>Name: {char.name}</CardTitle>
                <CardText>Eye Color: {char.eye_color}</CardText>
                <CardText>Hair color: {char.hair_color}</CardText>
                <CardText>Gender: {char.gender}</CardText>
                <CardText>Mass: {char.mass}kg</CardText>
                <CardText>Height: {char.height}cm</CardText>
                <CardText>Birth Year: {char.birth_year}</CardText>
                </CardBody>
            </Card>
        </div>
      );
  };
  export default Character;