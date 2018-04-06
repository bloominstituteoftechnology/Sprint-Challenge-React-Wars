import React from 'react';
import './Character.css';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';


const Character = (props) => {
	// receives star wars api data from Apps
	// console.log(props.chars);
	return (
		<div className="cardContainer">
			{props.chars.map((char, index) => 
				<Card>
					<CardBody>
						<h2>{char.name}</h2>
						<CardTitle>Quick Facts</CardTitle>
						<ListGroup>
							<ListGroupItem>Cras justo odio</ListGroupItem>


						</ListGroup>
					</CardBody>
				</Card>
			)}
		</div>
	);
}

export default Character;