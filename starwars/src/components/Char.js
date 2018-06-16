import React from 'react';
import './StarWars.css';

const Char = props => {
	return 	<div className="star-wars-card">
		<p>Name: {props.swChar.name}</p>
		<p>Height: {props.swChar.height}</p>
		<p>Eye Color: {props.swChar.eye_color}</p>
		<p>Gender: {props.swChar.gender}</p>
	</div>
};

export default Char;