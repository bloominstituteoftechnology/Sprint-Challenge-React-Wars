import React from "react";
import { Card, CardBody, ListGroup, ListGroupItem, TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";

class Character extends React.Component {
  constructor(props) {
    super(props);
  };
}

//receive api data from Apps

render() {
  return (
    <div>{this.props.chars.map((char,index) =>
       <Card>
	   <CardBody>
			       <h2>{char.name}<h2>}
	  </div>


	  <div>
	      <ListGroup>
		  <ListGroupItem>Height:{char.height}</ListGroupItem>
		  <ListGroupItem>Mass:{char.mass}</ListGroupItem>
	          <ListGroupItem>Hair Color: {char.hair_color}</ListGroupItem>
		  <ListGroupItem>Skin Color: {char.skin_color}</ListGroupItem>
		  <ListGroupItem>Eye Color: {char.eye_color}</ListGroupItem>
		  <ListGroupItem>Birth Year: {char.birth_year}</ListGroupItem>
	          <ListGroupItem>Gender: {char.gender}</ListGroupItem>
		  <ListGroupItem>Homeworld: {char.homeworld}</ListGroupItem>
		  <ListGroupItem>Species: {char.species}</ListGroupItem>
		  <ListGroupItem>Created: {char.created}</ListGroupItem>
	          <ListGroupItem>Edited: {char.edited}</ListGroupItem>
		  <ListGroupItem>url: {char.url}</ListGroupItem>	      
		</ListGroup>
	  </CardBody>
        </Card>
     </div>
	  
	  
  )
}
    
