import React from 'react';
import './Character.css';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Character = (props) => {
	// receives star wars api data from Apps
	// console.log(props.chars);
	return (
		<div className="cardContainer">
			{props.chars.map((char, index) => 
				<Card>
					<CardBody>
						<CardTitle>{char.name}</CardTitle>
						<CardTitle>{char.birth_year}</CardTitle>
						<CardTitle>{char.created}</CardTitle>
						<CardTitle>{char.homeworld}</CardTitle>
					</CardBody>
				</Card>
			)}
		</div>
	);
}

export default Character;