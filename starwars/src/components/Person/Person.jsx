import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import "./Person.css";



function Person(props) {
  const person = props.person;
  return (
    <Card className="person-card">
      <CardBody className="person-card-body">
        <CardTitle className="person-title">{person.name} {props.index}</CardTitle>
        <div className="person-text">
          <CardText>Born in {person.birth_year}</CardText>
          <CardText>Height:{person.height}</CardText>
          <CardText>Mass:{person.mass}</CardText>
          <CardText>Hair Color:{person.hair_color}</CardText>
          <CardText>Skin Color:{person.skin_color}</CardText>
          <CardText>Eye Color:{person.eye_color}</CardText>
          <CardText>Gender:{person.gender}</CardText>
        </div>        
      </CardBody>
    </Card>
  );
}

export default Person;
