import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

export default class CharCard extends React.Component {
	render() {
		// const charNum = this.props.charNum;
		const charList = this.props.charList;
		// const Char = charList[charNum];
		// // console.log(charNum);
		// console.log(Char);
		return (
			<div>
				{charList.map((char, index) => 
					<Card key={index}>
						<CardTitle>{char.name}</CardTitle>
						<CardText>DOB: {char.birth_year}</CardText>
						<CardText>Gender: {char.gender}</CardText>
						<CardText>Hair Color: {char.hair_color}</CardText>
						<CardText>Height: {char.height}</CardText>
					</Card>
				)}
			</div>
		)
	}
}