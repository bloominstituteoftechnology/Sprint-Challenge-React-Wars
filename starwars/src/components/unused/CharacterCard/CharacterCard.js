// CURRENTLY NOT USED
// CharacterCard contains the elements that make up the presentation of the card object.  It should not contain item-specific elements (i.e. content that is being presented)

import React from 'react';
import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
 
const StarWarsChars = props => {
  return (
    <Card key={props.char.name}>
      <CardBody>
        <CardHeader className="Card-header">
          <h1>{props.char.name}</h1>
        </CardHeader>
        <CardTitle>
          {/* <p>{props.char.name} </p> */}
          <ul>
            <li>Species: {props.char.species}</li>
            <li>Gender: {props.char.gender}</li>
          </ul>
          {/* <p>
            (Species: {props.char.species}| Gender: {props.char.gender})
          </p> */}
        </CardTitle>

        <CardSubtitle>Physical</CardSubtitle>
        <CardText>
          Height: {props.char.height} | Mass: {props.char.mass}
        </CardText>
        <CardText>
          Skin: {props.char.skin_color} | Eyes: {props.char.eye_color} | Hair:{" "}
          {props.char.hair_color}
        </CardText>
        <CardSubtitle>Demographics</CardSubtitle>
        <CardText>Created: {props.char.created}</CardText>
        <CardText>Birth Year: {props.char.birth_year}</CardText>
        {/* TRY FETCH to grab values from https://swapi.co/api/planets/1/  store in variables */}
        <CardSubtitle>Intel</CardSubtitle>
        <CardText>Homeworld: {props.char.homeworld}</CardText>
        <CardText>
          Starships:
          <ol>
            {props.char.starships.map(ship => (
              <li>{ship}</li>
            ))}
          </ol>
        </CardText>
        {/* <CardText>Starships: {props.char.starships}</CardText> */}
        <CardText>
          Vehicles:
          <ol>
            {props.char.vehicles.map(vehicle => (
              <li>{vehicle}</li>
            ))}
          </ol>
        </CardText>
        <CardText>
          Url: <a href={props.char.url}>TestLink</a>
        </CardText>
        <Button className="btn-NavButton">View Full Bio</Button>
        <Button>Play Demo Reel</Button>
      </CardBody>
    </Card>
  );
};

 export default CharacterCard