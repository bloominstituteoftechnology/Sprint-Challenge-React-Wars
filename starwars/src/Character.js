import React from "react";
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem } from "reactstrap";

const Character = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
	  <CardTitle>
	    <h2>{props.name}</h2>
	  </CardTitle>	
	  <CardText>
              <ListGroup>
		  <ListGroupItem>Height:{props.height}</ListGroupItem>
		  <ListGroupItem>Mass:{props.mass}</ListGroupItem>
	          <ListGroupItem>Hair Color: {props.hair_color}</ListGroupItem>
		  <ListGroupItem>Skin Color: {props.skin_color}</ListGroupItem>
		  <ListGroupItem>Eye Color: {props.eye_color}</ListGroupItem>
		  <ListGroupItem>Birth Year: {props.birth_year}</ListGroupItem>
	          <ListGroupItem>Gender: {props.gender}</ListGroupItem>
		  <ListGroupItem>Homeworld: {props.homeworld}</ListGroupItem>
		  <ListGroupItem>Species: {props.species}</ListGroupItem>
		  <ListGroupItem>Created: {props.created}</ListGroupItem>
	          <ListGroupItem>Edited: {props.edited}</ListGroupItem>
		  <ListGroupItem>url: {props.url}</ListGroupItem>	      
		</ListGroup>
	  </CardText>
	 </CardBody>
        </Card>
     </div>

  );
}

export default Character;
