import React from 'react';
import './PersonCard.css';
import {
  Card, CardHeader, CardFooter, CardBody,
  CardTitle, CardText
} from 'reactstrap';
const PersonCard = props => {
  return (

    <div className="col-4 boxes">
      <Card color="">
        <CardHeader><h2>{props.person.name}</h2></CardHeader>
        <CardBody>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>DOB: {props.person.birth_year}</CardText>
          <CardText>EYE COLOR: {props.person.eye_color}</CardText>
          <CardText>HAIR COLOR: {props.person.hair_color}</CardText>
          <CardText>HEIGHT:{props.person.height}</CardText>
          <CardText>MASS: {props.person.mass}</CardText>

        </CardBody>

      </Card>
    </div>
  );
};

export default PersonCard;