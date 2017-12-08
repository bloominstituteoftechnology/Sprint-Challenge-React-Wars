import React, { Component } from 'react'

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
			<strong>{props.name}: </strong>
			<strong>{props.height} inches</strong>
		</div>
	)
}

	

export default Card;