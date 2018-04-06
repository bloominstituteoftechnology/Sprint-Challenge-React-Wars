import React from "react";
import "./CharDetails.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const CharDetails = props => {
  console.log(props.chars);

  return (
    <div className="charDetails">
      {props.chars.map(char => (
        <div>
          <Card className="charCard">
            <CardBody>
              <CardTitle>
                <div>{char.name}</div>
              </CardTitle>
              <CardText>
                <div>Birth Year: {char.birth_year}</div>
                <div>Gender: {char.gender}</div>
                <div>Height: {char.height}</div>
                <div>Mass: {char.mass}</div>
                <div>Hair Color: {char.hair_color}</div>
                <div>Eye Color: {char.eye_color}</div>
                <div>Skin Color: {char.skin_color}</div>
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default CharDetails;
