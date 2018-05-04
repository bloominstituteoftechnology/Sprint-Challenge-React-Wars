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
            <CardText>{char.height}</CardText>
            <CardText>{char.mass}</CardText>
            <CardText>{char.hair_color}</CardText>
            <CardText>{char.eye_color}</CardText>
            <CardText>{char.birth_year}</CardText>
            <CardText>{char.gender}</CardText>            
            <Button className="button">Know More!</Button>
          </CardBody>
        </Card>
      </div>
    );
  };

  export default Char;





