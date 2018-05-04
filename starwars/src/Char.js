import React from "react";
import "./PeopleList.css";
import { Card, CardText, CardBody, CardTitle, Button } from "reactstrap";

const Char = ({ char }) => {
    return (
      <div>
        <Card className= "card">          
          <CardBody className="cardBody">
            <CardTitle className="cardTitle">
              {char.name}
            </CardTitle>            
            <CardText>Height: {char.height}</CardText>
            <CardText>Mass: {char.mass}</CardText>
            <CardText>Hair Color: {char.hair_color}</CardText>
            <CardText>Eye Color: {char.eye_color}</CardText>
            <CardText>Birth Year: {char.birth_year}</CardText>
            <CardText>Gender: {char.gender}</CardText>            
            <Button className="button">Know More!</Button>
          </CardBody>
        </Card>
      </div>
    );
  };

  export default Char;





