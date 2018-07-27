import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import "./card.css";

const ToonCard = props => {
  return (
    <div className="card-wrapper">
      <div className="card-container">
        <Card>
          <CardBody>
            <CardTitle>{props.name}</CardTitle>
            <CardText>
              <p>Gender: {props.gender}
              Height: {props.height}
              Weight: {props.weight}
              Birth Year: {props.birth_year}</p>
            </CardText>            
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default ToonCard;
