import React from 'react';
import { Card, CardHeader, CardFooter, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

const StarWarsChars = props => {
return (
  <Card key={props.char.name}>
    <CardBody>
       <CardHeader><h1>{props.char.name}</h1></CardHeader>         
       <CardTitle>
      {/* <p>{props.char.name} </p> */}
       <p>(Species: {props.char.species.species}| Gender: {props.char.gender})</p></CardTitle>

      <CardSubtitle>Physical Characteristics</CardSubtitle>
      <CardText>Height: {props.char.height} | Mass: {props.char.mass}</CardText>
      <CardText>Skin: {props.char.skin_color} | Eyes: {props.char.eye_color} | Hair: {props.char.hair_color}</CardText>
      <CardSubtitle>Demographics</CardSubtitle>
      <CardText>Created: {props.char.created}</CardText>
      <CardText>Birth Year: {props.char.birth_year}</CardText>
      {/* TRY FETCH to grab values from https://swapi.co/api/planets/1/  store in variables */}
      <CardText>Homeworld: {props.char.homeworld}</CardText>
      <CardText>Starships: {props.char.starships}</CardText>
      <CardText>Vehicles: {props.char.vehicles}</CardText>
      <CardText>Url: {props.char.url}</CardText>
      <Button className="btn-NavButton">View Full Bio</Button>
      <Button>Play Demo Reel</Button>
    </CardBody>
  </Card>
  ); 
};

export default StarWarsChars;