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
				{/* When I have the time want to make this DRY. Most likely
				Need to put these into an object with this data passed in */}
				<strong className="card__item name">{props.name}<br/></strong>
				<div className="card__inner">
					<span className="card__item info">Birth Year: {props.birth_year} <br/></span>
					<span className="card__item info">Height: {props.height} inches <br/></span>
					<span className="card__item info">Sex: {props.gender} <br/></span>
					<span className="card__item info">Eye Color: {props.eye_color} <br/></span>
					<span className="card__item info">Hair Color: {props.hair_color} <br/></span>
					<span className="card__item info">Mass: {props.mass}kg <br/></span>
				</div>
			</div>
		</div>
	)
}


	

export default Card;