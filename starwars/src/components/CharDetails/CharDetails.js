import React from "react";
import "./CharDetails.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  ListGroup,
  ListGroupItem
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
                <ListGroup>
                  <ListGroupItem>Birth Year: {char.birth_year}</ListGroupItem>
                  <ListGroupItem color="secondary">Gender: {char.gender}</ListGroupItem>
                  <ListGroupItem>Height: {char.height}</ListGroupItem>
                  <ListGroupItem color="secondary">Mass: {char.mass}</ListGroupItem>
                  <ListGroupItem>Hair Color: {char.hair_color}</ListGroupItem>
                  <ListGroupItem color="secondary">Eye Color: {char.eye_color}</ListGroupItem>
                  <ListGroupItem>Skin Color: {char.skin_color}</ListGroupItem>
                </ListGroup>
              </CardText>
              <Button href="http://starwars.wikia.com/wiki/The_Essential_Guide_to_Characters">
                Learn More
              </Button>
            </CardBody>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default CharDetails;
