import React from "react";
import { Card, CardTitle, CardText, ListGroup, ListGroupItem } from "reactstrap";
import "./Character.css";

const Character = (props) => {
  return (
    <div>
      <Card className="card">
          <CardTitle>
	    <h2>{props.name}</h2>
	  </CardTitle>	
	  <CardText>
            <ListGroup>
	          <ListGroupItem className="lgi">Height:{props.height}</ListGroupItem>
		  <ListGroupItem className="lgi">Mass:{props.mass}</ListGroupItem>
	          <ListGroupItem className="lgi">Hair Color: {props.hair_color}</ListGroupItem>
		  <ListGroupItem className="lgi">Skin Color: {props.skin_color}</ListGroupItem>
		  <ListGroupItem className="lgi">Eye Color: {props.eye_color}</ListGroupItem>
		  <ListGroupItem className="lgi">Birth Year: {props.birth_year}</ListGroupItem>
	          <ListGroupItem className="lgi">Gender: {props.gender}</ListGroupItem>
		  <ListGroupItem className="lgi">Created: {props.created}</ListGroupItem>
	          <ListGroupItem className="lgi">Edited: {props.edited}</ListGroupItem>	      
		</ListGroup>
	  </CardText>
      </Card>
    </div>
  );
};

export default Character;
