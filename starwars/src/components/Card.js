import React from 'react';
import './Card.css'

// class Card extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			characterInfo: props.info
// 		}
// 	}
 // Going to keep this but realized that I'm using props sp
 // functional component should be enough.

const Card = (props) => {
	return (
		<div className="card">
			<div className="card__content">
				<strong className="card__item">{props.name} <br/></strong>
				<strong className="card__item">Birth Year: {props.birth_year} <br/></strong>
				<strong className="card__item">Height: {props.height} inches <br/></strong>
				<strong className="card__item">Sex: {props.gender} <br/></strong>
				<strong className="card__item">Eye Color: {props.eye_color} <br/></strong>
				<strong className="card__item">Hair Color: {props.hair_color} <br/></strong>
				<strong className="card__item">Mass: {props.mass}kg <br/></strong>
			</div>
		</div>
	)
}

	

export default Card;